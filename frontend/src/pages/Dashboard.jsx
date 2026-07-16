import { useState } from "react";
import Navbar from "../components/Navbar";
import RepositoryLoader from "../components/RepositoryLoader";
import RepositoryDashboard from "../components/RepositoryDashboard";
import HealthScore from "../components/HealthScore";
import RepositoryReview from "../components/RepositoryReview";
import ChatBox from "../components/ChatBox";
import Footer from "../components/Footer";

export default function Dashboard() {

    const [repository, setRepository] = useState("");
    const [repoStats, setRepoStats] = useState(null);
    const [health, setHealth] = useState(null);

    return (

        <div className="min-h-screen bg-slate-100">

            <Navbar />

            <div className="max-w-7xl mx-auto p-10">

                {/* ================= HERO ================= */}

                <h1 className="text-5xl font-bold text-center">
                    🤖 RepoMindAI
                </h1>

                <p className="text-center text-gray-600 mt-4 text-lg">
                    Understand Any GitHub Repository Using Artificial Intelligence
                </p>

                <div className="mt-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl shadow-xl text-white p-10">

                    <div className="grid lg:grid-cols-2 gap-10 items-center">

                        <div>

                            <h2 className="text-4xl font-bold">
                                Analyze Any GitHub Repository
                            </h2>

                            <p className="mt-6 text-lg leading-8">

                                RepoMindAI combines Retrieval-Augmented
                                Generation (RAG), ChromaDB,
                                Sentence Transformers and Google Gemini
                                to understand repositories,
                                answer questions,
                                summarize architecture,
                                review code quality
                                and generate AI insights.

                            </p>

                            <div className="flex flex-wrap gap-4 mt-8">

                                <div className="bg-white/20 px-4 py-2 rounded-full">
                                    🤖 Google Gemini
                                </div>

                                <div className="bg-white/20 px-4 py-2 rounded-full">
                                    🧠 ChromaDB
                                </div>

                                <div className="bg-white/20 px-4 py-2 rounded-full">
                                    ⚡ FastAPI
                                </div>

                                <div className="bg-white/20 px-4 py-2 rounded-full">
                                    💬 RAG Chat
                                </div>

                            </div>

                        </div>

                        <div className="text-center">

                            <div className="text-8xl">
                                🚀
                            </div>

                            <h3 className="text-3xl font-bold mt-6">
                                AI Repository Intelligence
                            </h3>

                            <p className="mt-4 text-blue-100">
                                Load • Analyze • Review • Chat
                            </p>

                        </div>

                    </div>

                </div>

                {/* ================= TECHNOLOGY STACK ================= */}

                <div className="mt-12">

                    <h2 className="text-3xl font-bold text-center mb-8">
                        ⚙️ Technology Stack
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg p-6 hover:scale-105 transition">

                            <h3 className="text-2xl font-bold">
                                ⚡ Google Gemini
                            </h3>

                            <p className="mt-3">
                                Generates repository summaries,
                                explanations,
                                architecture analysis,
                                AI review
                                and intelligent answers.
                            </p>

                        </div>

                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl shadow-lg p-6 hover:scale-105 transition">

                            <h3 className="text-2xl font-bold">
                                🧠 ChromaDB
                            </h3>

                            <p className="mt-3">
                                Stores vector embeddings and performs
                                semantic retrieval
                                for Retrieval-Augmented Generation.
                            </p>

                        </div>

                        <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl shadow-lg p-6 hover:scale-105 transition">

                            <h3 className="text-2xl font-bold">
                                🔍 Sentence Transformers
                            </h3>

                            <p className="mt-3">
                                Converts repository files into
                                embeddings for accurate
                                similarity search.
                            </p>

                        </div>

                    </div>

                </div>

                {/* ================= FEATURES ================= */}

                <div className="mt-14">

                    <h2 className="text-3xl font-bold text-center mb-8">
                        🚀 Features
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

                        <div className="bg-white rounded-xl shadow p-5 text-center hover:shadow-xl transition">
                            <div className="text-4xl">📊</div>
                            <h3 className="font-semibold mt-3">
                                Dashboard
                            </h3>
                        </div>

                        <div className="bg-white rounded-xl shadow p-5 text-center hover:shadow-xl transition">
                            <div className="text-4xl">🧠</div>
                            <h3 className="font-semibold mt-3">
                                AI Summary
                            </h3>
                        </div>

                        <div className="bg-white rounded-xl shadow p-5 text-center hover:shadow-xl transition">
                            <div className="text-4xl">❤️</div>
                            <h3 className="font-semibold mt-3">
                                Health Score
                            </h3>
                        </div>

                        <div className="bg-white rounded-xl shadow p-5 text-center hover:shadow-xl transition">
                            <div className="text-4xl">🤖</div>
                            <h3 className="font-semibold mt-3">
                                AI Review
                            </h3>
                        </div>

                        <div className="bg-white rounded-xl shadow p-5 text-center hover:shadow-xl transition">
                            <div className="text-4xl">💬</div>
                            <h3 className="font-semibold mt-3">
                                AI Chat
                            </h3>
                        </div>

                        <div className="bg-white rounded-xl shadow p-5 text-center hover:shadow-xl transition">
                            <div className="text-4xl">🔍</div>
                            <h3 className="font-semibold mt-3">
                                Semantic Search
                            </h3>
                        </div>

                    </div>

                </div>

                                {/* ================= PROJECT STATS ================= */}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

                    <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition">

                        <h2 className="text-4xl font-bold text-blue-600">
                            100+
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Repositories
                        </p>

                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition">

                        <h2 className="text-4xl font-bold text-green-600">
                            AI
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Code Review
                        </p>

                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition">

                        <h2 className="text-4xl font-bold text-purple-600">
                            RAG
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Semantic Search
                        </p>

                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition">

                        <h2 className="text-4xl font-bold text-red-600">
                            24/7
                        </h2>

                        <p className="text-gray-500 mt-2">
                            AI Assistant
                        </p>

                    </div>

                </div>

                {/* ================= REPOSITORY LOADER ================= */}

                <hr className="my-14 border-gray-300" />

                <RepositoryLoader
                    setRepository={setRepository}
                    setRepoStats={setRepoStats}
                    setHealth={setHealth}
                />

                {/* ================= REPOSITORY DASHBOARD ================= */}

                <hr className="my-14 border-gray-300" />

                <RepositoryDashboard
                    stats={repoStats}
                />

                {/* ================= HEALTH SCORE ================= */}

                <hr className="my-14 border-gray-300" />

                <HealthScore
                    health={health}
                />

                {/* ================= AI REVIEW ================= */}

                <hr className="my-14 border-gray-300" />

                <RepositoryReview
                    repository={repository}
                />

                                {/* ================= AI CHAT ================= */}

                <hr className="my-14 border-gray-300" />

                <ChatBox
                    repository={repository}
                />

                {/* ================= FOOTER ================= */}

                <Footer />

            </div>

            {/* ================= SCROLL TO TOP BUTTON ================= */}

            <button
                onClick={() =>
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    })
                }
                className="
                    fixed
                    bottom-8
                    right-8
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    w-14
                    h-14
                    rounded-full
                    shadow-2xl
                    transition-all
                    duration-300
                    hover:scale-110
                    z-50
                "
                title="Back to Top"
            >
                ↑
            </button>

        </div>
    );
}