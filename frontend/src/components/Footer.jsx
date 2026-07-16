export default function Footer() {
    return (
        <footer className="mt-20 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white rounded-t-3xl">

            <div className="max-w-7xl mx-auto px-8 py-12">

                {/* Logo */}

                <div className="text-center">

                    <h2 className="text-3xl font-bold">
                        🤖 RepoMindAI
                    </h2>

                    <p className="mt-3 text-gray-300 text-lg">
                        AI-Powered Repository Intelligence Platform
                    </p>

                </div>

                {/* Tech Stack */}

                <div className="flex flex-wrap justify-center gap-3 mt-8">

                    <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">
                        ⚛️ React
                    </span>

                    <span className="bg-green-600 px-4 py-2 rounded-full text-sm">
                        ⚡ FastAPI
                    </span>

                    <span className="bg-purple-600 px-4 py-2 rounded-full text-sm">
                        🤖 Google Gemini
                    </span>

                    <span className="bg-pink-600 px-4 py-2 rounded-full text-sm">
                        🧠 ChromaDB
                    </span>

                    <span className="bg-orange-600 px-4 py-2 rounded-full text-sm">
                        🔍 Sentence Transformers
                    </span>

                </div>

                {/* Description */}

                <div className="text-center mt-10">

                    <p className="text-gray-400 max-w-3xl mx-auto leading-7">

                        RepoMindAI helps developers understand, analyze,
                        review and interact with GitHub repositories using
                        Retrieval-Augmented Generation (RAG), semantic search,
                        vector embeddings and Google Gemini AI.

                    </p>

                </div>

                {/* Social Links */}

                <div className="flex justify-center gap-6 mt-10">

                    <a
                        href="https://github.com/ash16wini"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition"
                    >
                        🐙 GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/iamashwini16/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition"
                    >
                        💼 LinkedIn
                    </a>

                </div>

                <hr className="my-8 border-gray-700" />

                {/* Copyright */}

                <div className="text-center text-sm text-gray-400">

                    <p>
                        Built with ❤️ by <span className="font-semibold text-white">Ashwini</span>
                    </p>

                    <p className="mt-2">
                        © 2026 RepoMindAI. All Rights Reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
}