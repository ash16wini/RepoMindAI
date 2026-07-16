export default function HealthScore({ health }) {

    if (!health) return null;

    return (

        <div className="bg-white rounded-xl shadow-xl p-8 mt-8">

            {/* Header */}

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h2 className="text-3xl font-bold">
                        ❤️ Repository Health
                    </h2>

                    <p className="text-gray-500 mt-2">
                        AI evaluation of repository quality and maintainability.
                    </p>

                </div>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                    Excellent Repository
                </span>

            </div>

            {/* Score */}

            <div className="flex items-center gap-8 mb-8">

                <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center shadow-inner">

                    <span className="text-5xl font-bold text-green-700">
                        {health.score}
                    </span>

                </div>

                <div>

                    <h3 className="text-2xl font-bold">
                        {health.score}/100
                    </h3>

                    <p className="text-gray-500 mt-2">
                        Overall Repository Health Score
                    </p>

                </div>

            </div>

            {/* Progress Bar */}

            <div className="mb-8">

                <div className="flex justify-between mb-2">

                    <span className="font-semibold">
                        Health Progress
                    </span>

                    <span className="font-bold text-green-700">
                        {health.score}%
                    </span>

                </div>

                <div className="w-full bg-gray-200 rounded-full h-4">

                    <div
                        className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full transition-all duration-700"
                        style={{ width: `${health.score}%` }}
                    />

                </div>

            </div>

            {/* Details */}

            <div className="grid md:grid-cols-2 gap-4">

                {Object.entries(health.details).map(([key, value]) => (

                    <div
                        key={key}
                        className="bg-slate-50 rounded-xl border p-5 flex justify-between items-center hover:shadow-lg transition-all duration-300"
                    >

                        <span className="font-semibold">
                            {key}
                        </span>

                        <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold
                            ${
                                value === "Excellent"
                                    ? "bg-green-100 text-green-700"
                                    : value === "Present"
                                    ? "bg-blue-100 text-blue-700"
                                    : value === "Good"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-red-100 text-red-700"
                            }`}
                        >
                            {value}
                        </span>

                    </div>

                ))}

            </div>

        </div>

    );

}