import gc
import time
import os

from app.repository.github_loader import clone_repository
from app.repository.loader import load_repository
from app.repository.chunker import chunk_documents
from app.embeddings.embedder import create_embeddings
from app.vectorstore.chroma_store import store_embeddings
from app.utils.logger import logger
from app.config.settings import BATCH_SIZE
from app.vectorstore.chroma_store import get_collection

def repository_service(url: str):

    logger.info("STEP 1: Cloning repository...")
    repo_path = clone_repository(url)
    logger.info("Clone completed")

    logger.info("STEP 2: Loading files...")
    documents = load_repository(repo_path)
    logger.info(f"Loaded {len(documents)} files")

    logger.info("STEP 3: Chunking...")
    chunks = chunk_documents(documents)
    logger.info(f"Created {len(chunks)} chunks")

    repo_name = repo_path.split("\\")[-1]

    collection = get_collection(repo_name)

    if collection.count() > 0:
        logger.info("Repository already indexed.")

        return {
           "status": "success",
           "repository": repo_name,
           "files": len(documents),
           "chunks": collection.count(),
           "message": "Repository already indexed."
        }

    for i in range(0, len(chunks), BATCH_SIZE):

        logger.info(f"Processing batch {i}")

        batch = chunks[i:i + BATCH_SIZE]

        start = time.time()
        embeddings = create_embeddings(batch)
        logger.info(f"Embedding Time: {time.time() - start:.2f} sec")

        start = time.time()
        store_embeddings(
            repo_name=repo_name,
            chunks=batch,
            embeddings=embeddings,
            start_index=i
        )
        logger.info(f"Store Time: {time.time() - start:.2f} sec")

        del embeddings
        del batch
        gc.collect()

        logger.info("Repository indexed successfully.")

    python_files = sum(
        1 for d in documents
        if d["path"].endswith(".py")
    )

    markdown_files = sum(
        1 for d in documents
        if d["path"].endswith(".md")
    )

    config_files = sum(
        1
        for d in documents
        if d["path"].endswith(
            (
                ".json",
                ".yaml",
                ".yml",
                ".toml"
            )
        )
    )

    return {
        "status": "success",
        "repository": repo_name,
        "files": len(documents),
        "chunks": len(chunks),
        "python_files": python_files,
        "markdown_files": markdown_files,
        "config_files": config_files,
        "message": "Repository Loaded Successfully!"
    }

