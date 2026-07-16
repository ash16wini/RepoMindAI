import { useState } from "react";
import api from "../services/api";
import { ClipLoader } from "react-spinners";

export default function RepositoryLoader({
    setRepository,
    setRepoStats,
    setHealth,
}) {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const loadRepository = async () => {

        if (!url.trim()) {
            setIsError(true);
            setMessage("Please enter a GitHub repository URL.");
            return;
        }

        if (!url.includes("github.com")) {
            setIsError(true);
            setMessage("Please enter a valid GitHub repository URL.");
            return;
        }

        try {

            setLoading(true);
            setIsError(false);

            setMessage("Cloning repository and generating embeddings...");

            setRepoStats(null);
            setHealth(null);
            setRepository("");

            const response = await api.post("/load-repository", {
                url,
            });

            const repoName = response.data.repository;

            const summaryResponse = await api.post(
                "/repository-summary",
                {
                    repository: repoName,
                }
            );

            const healthResponse = await api.post(
                "/health-score",
                {
                    repository: repoName,
                }
            );

            const newStats = {
                ...response.data,
                summary: summaryResponse.data.summary,
            };

            console.log("Repository:", response.data);
            console.log("Summary:", summaryResponse.data);
            console.log("Health:", healthResponse.data);

            setRepoStats(newStats);
            setHealth(healthResponse.data);
            setRepository(repoName);

            setMessage(
                response.data.message ||
                    `✅ Repository "${repoName}" loaded successfully!`
            );

        } catch (error) {

            console.error(error);

            setIsError(true);

            setMessage(
`❌ Failed to load repository.

Possible reasons:
• Invalid GitHub URL
• Repository is private
• GitHub rate limit reached
• Internet connection issue
• Backend server error`
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <div className="bg-white rounded-xl shadow-xl p-8 mt-10">

            <h2 className="text-2xl font-bold mb-2">
                📂 GitHub Repository Loader
            </h2>

            <p className="text-gray-500 mb-6">
                Paste any public GitHub repository URL to begin AI analysis.
            </p>

            <input
                type="text"
                placeholder="https://github.com/fastapi/fastapi"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                onClick={loadRepository}
                disabled={loading}
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 rounded-lg flex items-center justify-center gap-3 transition"
            >
                {loading ? (
                    <>
                        <ClipLoader
                            color="#ffffff"
                            size={20}
                        />
                        <span>Loading Repository...</span>
                    </>
                ) : (
                    <>
                        🚀 Load Repository
                    </>
                )}
            </button>

            {message && (
                <div
                    className={`mt-6 rounded-lg p-4 whitespace-pre-line font-medium ${
                        isError
                            ? "bg-red-50 text-red-700 border border-red-200"
                            : "bg-green-50 text-green-700 border border-green-200"
                    }`}
                >
                    {message}
                </div>
            )}

        </div>
    );
}