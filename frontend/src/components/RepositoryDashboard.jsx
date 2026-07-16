import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function RepositoryDashboard({ stats }) {

    if (!stats) {
        return (
            <div className="bg-white rounded-xl shadow-lg p-10 mt-8 text-center">
                <div className="text-6xl mb-4">📂</div>

                <h2 className="text-2xl font-bold text-gray-700">
                    No Repository Loaded
                </h2>

                <p className="text-gray-500 mt-3">
                    Paste a GitHub repository URL above to begin exploring it with AI.
                </p>
            </div>
        );
    }

    return (

        <div className="bg-white rounded-xl shadow-xl p-8 mt-8">

            {/* Header */}

            <div className="mb-8">

                <h2 className="text-4xl font-bold">
                    📊 Repository Analytics
                </h2>

                <p className="text-gray-500 mt-2">
                    AI generated insights for the indexed repository.
                </p>

                <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mt-4 font-semibold">
                    📁 {stats.repository}
                </div>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Repository */}

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6">

                    <div className="text-4xl">📁</div>

                    <p className="text-gray-500 mt-2">
                        Repository
                    </p>

                    <h2 className="text-xl font-bold mt-1">
                        {stats.repository}
                    </h2>

                </div>

                {/* Files */}

                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6">

                    <div className="text-4xl">📄</div>

                    <p className="text-gray-500 mt-2">
                        Files
                    </p>

                    <h2 className="text-xl font-bold mt-1">
                        {stats.files}
                    </h2>

                </div>

                {/* Chunks */}

                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6">

                    <div className="text-4xl">📦</div>

                    <p className="text-gray-500 mt-2">
                        Chunks
                    </p>

                    <h2 className="text-xl font-bold mt-1">
                        {stats.chunks}
                    </h2>

                </div>

                {/* Python */}

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6">

                    <div className="text-4xl">🐍</div>

                    <p className="text-gray-500 mt-2">
                        Python Files
                    </p>

                    <h2 className="text-xl font-bold mt-1">
                        {stats.python_files}
                    </h2>

                </div>

                {/* Markdown */}

                <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6">

                    <div className="text-4xl">📘</div>

                    <p className="text-gray-500 mt-2">
                        Markdown Files
                    </p>

                    <h2 className="text-xl font-bold mt-1">
                        {stats.markdown_files}
                    </h2>

                </div>

                {/* Config */}

                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6">

                    <div className="text-4xl">⚙️</div>

                    <p className="text-gray-500 mt-2">
                        Config Files
                    </p>

                    <h2 className="text-xl font-bold mt-1">
                        {stats.config_files}
                    </h2>

                </div>

                {/* Status */}

                <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6">

                    <div className="text-4xl">✅</div>

                    <p className="text-gray-500 mt-2">
                        Status
                    </p>

                    <h2 className="text-xl font-bold text-green-700 mt-1">
                        Indexed
                    </h2>

                </div>

            </div>

            {/* Divider */}

            <hr className="my-10" />

            {/* AI Summary */}

            {stats.summary && (

                <div className="bg-slate-50 rounded-xl border p-8">

                    <div className="flex justify-between items-center mb-6">

                        <h2 className="text-3xl font-bold">
                            🧠 AI Repository Summary
                        </h2>

                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                            Generated by Gemini
                        </span>

                    </div>

                    <div className="prose prose-lg max-w-none">

                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {stats.summary}
                        </ReactMarkdown>

                    </div>

                </div>

            )}

        </div>

    );

}