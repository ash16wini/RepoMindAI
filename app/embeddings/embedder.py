from sentence_transformers import SentenceTransformer
from app.config.settings import MODEL_NAME
from app.config.settings import EMBED_BATCH_SIZE

import gc

model = SentenceTransformer(MODEL_NAME)


def create_embeddings(chunks):

    texts = [chunk["content"] for chunk in chunks]

    embeddings = model.encode(
    texts,
    batch_size=EMBED_BATCH_SIZE,
    convert_to_numpy=True,
    show_progress_bar=False
)

    del texts
    gc.collect()

    return embeddings