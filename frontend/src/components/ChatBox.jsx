
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { useState, useEffect, useRef } from "react";
import api from "../services/api";

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
                },
            ]);

            setQuestion("");
        } catch (error) {
            console.error(error);

            setMessages((prev) => [
                ...prev,
                {
                    question,
                    answer: "Something went wrong.",
                    sources: [],
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
    chatEndRef.current?.scrollIntoView({
        behavior: "smooth",
    });
}, [messages]);

    return (
        <div className="bg-white mt-8 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-5">
                Ask RepoMindAI
            </h2>

            <textarea
                rows={4}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask anything about the repository..."
                className="w-full border rounded-lg p-4"
            />

            <button
                onClick={askAI}
                disabled={
                    loading ||
                    !repository ||
                    question.trim() === ""
                }
                className="mt-5 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg"
            >
                {loading ? "🤖 Thinking..." : "🚀 Ask RepoMindAI"}
            </button>

            {messages.map((msg, index) => (
                <div
                    key={index}
                    className="mt-6"
                >
                    <div className="bg-blue-100 p-4 rounded-lg mb-3">
                        <strong>You</strong>

                        <p className="mt-2">
                            {msg.question}
                        </p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg">
                        <strong>RepoMindAI</strong>

                        <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
        code({ className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");

    if (match) {
        return (
            <SyntaxHighlighter
                style={oneDark}
                language={match[1]}
                PreTag="div"
            >
                {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
        );
    }

    return (
        <code
            className="bg-gray-200 px-1 rounded"
            {...props}
        >
            {children}
        </code>
    );
},
    }}
    
>
    {msg.answer}
</ReactMarkdown>

                        {msg.sources.length > 0 && (
                            <div className="mt-4">
                                <h4 className="font-semibold text-sm mb-2">
                                    Sources
                                </h4>

                                <ul className="space-y-2">
                                    {msg.sources.map((source, i) => (
                                        <li
                                            key={i}
                                            className="bg-white border rounded-lg p-2"
                                        >
                                            <div className="font-mono text-xs">
                                                {source.file}
                                            </div>

                                            <div className="text-green-600 text-xs">
                                                Similarity: {source.score}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            ))}
            <div ref={chatEndRef}></div>
        </div>
    );
}
