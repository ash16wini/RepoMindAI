import { useState } from "react";
import api from "../services/api";

export default function RepositoryLoader({
    setRepository,
    setRepoStats
}) {

    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    console.log("URL being sent:", url);

    const loadRepository = async () => {

        try {

            setLoading(true);
            setMessage("");

            const response = await api.post(
                "/load-repository",
                {
                    url
                }
            );

            setRepoStats(response.data);

const repoName = response.data.repository;
setRepository(repoName);

            setMessage(
                response.data.message ||
                `Repository Loaded Successfully! (${response.data.files} files)`
            );
            
setRepository(repoName);

        } catch (error) {

            console.error(error);
            setMessage("Failed to load repository.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="bg-white mt-10 rounded-xl shadow-lg p-8">

            <h2 className="text-2xl font-semibold mb-5">
                GitHub Repository
            </h2>

            <input
                className="w-full border rounded-lg p-4"
                placeholder="https://github.com/fastapi/fastapi"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />

            <button
                onClick={loadRepository}
                disabled={loading}
                className="mt-5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg"
            >
                {loading ? "Loading Repository..." : "Load Repository"}
            </button>

            {message && (
                <p className="mt-5 text-green-600 font-semibold">
                    {message}
                </p>
            )}

        </div>

    );

}