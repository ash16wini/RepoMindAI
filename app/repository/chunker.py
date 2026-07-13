def chunk_documents(documents, chunk_size=2000, overlap=200):
    chunks = []

    for doc in documents:
        text = doc["content"]
        path = doc["path"]

        start = 0

        while start < len(text):
            end = start + chunk_size

            chunk = text[start:end]

            chunks.append(
                {
                    "path": path,
                    "content": chunk
                }
            )

            start += chunk_size - overlap

    return chunks