import { useState } from "react";
import Navbar from "../components/Navbar";
import RepositoryLoader from "../components/RepositoryLoader";
import ChatBox from "../components/ChatBox";
import RepositoryDashboard from "../components/RepositoryDashboard";

export default function Dashboard() {

    const [repository, setRepository] = useState("");
    const [repoStats, setRepoStats] = useState(null);

    return (

        <div className="min-h-screen bg-slate-100">

            <Navbar />

            <div className="max-w-7xl mx-auto p-10">

                <h1 className="text-5xl font-bold text-center">
                    RepoMindAI
                </h1>

                <p className="text-center text-gray-600 mt-3 text-lg">
                    AI Powered Repository Intelligence Platform
                </p>

                <RepositoryLoader
                    setRepository={setRepository}
                    setRepoStats={setRepoStats}
                />

                {repoStats && (
                    <RepositoryDashboard
                        stats={repoStats}
                    />
                )}

                <ChatBox
                    repository={repository}
                />

            </div>

        </div>

    );

}