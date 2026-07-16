import { useState, useEffect, useRef } from "react";
import api from "../services/api";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ChatBox({ repository }) {

    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const chatEndRef = useRef(null);

    const askAI = async () => {

        if (!question.trim()) return;

        try {

            setLoading(true);

            const response = await api.post("/chat", {
                repository,
                question,
            });

            setMessages((prev) => [
                ...prev,
                {
                    question,
                    answer: response.data.answer,
                    sources: response.data.sources || [],
                    timestamp: new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    }),
                },
            ]);

            setQuestion("");

        } catch (error) {

            console.error(error);

            setMessages((prev) => [
                ...prev,
                {
                    question,
                    answer: "❌ Something went wrong.",
                    sources: [],
                    timestamp: new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    }),
                },
            ]);

        } finally {

            setLoading(false);

        }

    };

    const copyToClipboard = async (text) => {

        try {

            await navigator.clipboard.writeText(text);

            alert("✅ Answer copied!");

        } catch {

            alert("Failed to copy.");

        }

    };

    useEffect(() => {

        chatEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });

    }, [messages, loading]);

    return (

        <div className="bg-white rounded-xl shadow-xl mt-8 p-8">

            {/* Header */}

            <div className="flex justify-between items-center mb-6">

                <div>

                    <h2 className="text-3xl font-bold">
                        💬 AI Repository Chat
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Ask anything about the indexed repository.
                    </p>

                </div>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                    Powered by Gemini
                </span>

            </div>

            {/* Suggestions */}

            <div className="bg-slate-50 border rounded-xl p-4 mb-6">

                <p className="font-semibold mb-2">
                    💡 Try asking:
                </p>

                <ul className="text-sm text-gray-600 space-y-1">

                    <li>• Explain the project architecture</li>

                    <li>• Where are API routes defined?</li>

                    <li>• Explain the authentication flow</li>

                    <li>• Which files are most important?</li>

                    <li>• How is the project structured?</li>

                </ul>

            </div>

            {/* Input */}

            <textarea
                rows={4}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {

                    if (e.key === "Enter" && !e.shiftKey) {

                        e.preventDefault();

                        askAI();

                    }

                }}
                placeholder="Ask a question about the repository..."
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-green-500 outline-none"
            />

            {/* Buttons */}

            <div className="flex gap-4 mt-5">

                <button
                    onClick={askAI}
                    disabled={
                        loading ||
                        !repository ||
                        question.trim() === ""
                    }
                    className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg transition"
                >

                    {loading
                        ? "🤖 Thinking..."
                        : "🚀 Ask RepoMindAI"}

                </button>

                <button
                    onClick={() => setMessages([])}
                    disabled={messages.length === 0}
                    className="bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg transition"
                >

                    🗑 Clear Chat

                </button>

            </div>

            {/* AI Loading */}

            {loading && (

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8">

                    <div className="animate-pulse">

                        <h3 className="font-semibold text-blue-700">
                            🤖 Gemini is thinking...
                        </h3>

                        <p className="text-gray-600 mt-2">
                            Searching repository...
                        </p>

                        <p className="text-gray-600">
                            Reading relevant files...
                        </p>

                        <p className="text-gray-600">
                            Generating response...
                        </p>

                    </div>

                </div>

            )}

            {/* Empty State */}

            {!loading && messages.length === 0 && (

                <div className="text-center bg-slate-50 rounded-xl border mt-8 p-10">

                    <div className="text-6xl">
                        🤖
                    </div>

                    <h3 className="text-xl font-bold mt-4">

                        Start a Conversation

                    </h3>

                    <p className="text-gray-500 mt-3">

                        Ask RepoMindAI anything about your repository.

                    </p>

                </div>

            )}

            {/* Messages */}

            {messages.map((msg, index) => (

                <div key={index} className="mt-8">

                    {/* User */}

                    <div className="bg-blue-100 rounded-xl p-5 mb-5">

                        <div className="flex justify-between">

                            <strong>👤 You</strong>

                            <span className="text-xs text-gray-500">

                                {msg.timestamp}

                            </span>

                        </div>

                        <p className="mt-3">

                            {msg.question}

                        </p>

                    </div>

                    {/* AI */}

                    <div className="bg-gray-50 rounded-xl border p-6">

                        <div className="flex justify-between items-center mb-5">

                            <strong className="text-lg">

                                🤖 RepoMindAI

                            </strong>

                            <button
                                onClick={() => copyToClipboard(msg.answer)}
                                className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-lg text-sm"
                            >

                                📋 Copy

                            </button>

                        </div>

                        <div className="prose max-w-none">

                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    code({ className, children }) {

                                        const match =
                                            /language-(\w+)/.exec(
                                                className || ""
                                            );

                                        return match ? (

                                            <SyntaxHighlighter
                                                style={oneDark}
                                                language={match[1]}
                                                PreTag="div"
                                            >
                                                {String(children).replace(/\n$/, "")}
                                            </SyntaxHighlighter>

                                        ) : (

                                            <code className="bg-gray-200 px-1 rounded">
                                                {children}
                                            </code>

                                        );

                                    },
                                }}
                            >

                                {msg.answer}

                            </ReactMarkdown>

                        </div>

                        {/* Sources */}

                        {msg.sources.length > 0 && (

                            <div className="mt-8">

                                <h3 className="font-bold mb-4">

                                    📂 Sources Used

                                </h3>

                                <div className="grid gap-3">

                                    {msg.sources.map((source, i) => (

                                        <div
                                            key={i}
                                            className="bg-white rounded-lg border p-4 hover:shadow-lg transition"
                                        >

                                            <div className="font-mono">

                                                📄 {source.file}

                                            </div>

                                            <div className="text-green-600 mt-2">

                                                Similarity Score: {source.score}

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        )}

                    </div>

                </div>

            ))}

            <div ref={chatEndRef}></div>

        </div>

    );

}