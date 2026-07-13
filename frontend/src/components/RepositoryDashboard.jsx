export default function RepositoryDashboard({ stats }) {
    if (!stats) return null;

    return (

        <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

            <h2 className="text-2xl font-semibold mb-6">
                📊 Repository Dashboard
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

                <div className="bg-slate-100 rounded-lg p-5">
                    <h3 className="text-gray-500">Repository</h3>
                    <p className="text-xl font-bold">
                        {stats.repository}
                    </p>
                </div>

                <div className="bg-slate-100 rounded-lg p-5">
                    <h3 className="text-gray-500">Files</h3>
                    <p className="text-xl font-bold">
                        {stats.files}
                    </p>
                </div>

                <div className="bg-slate-100 rounded-lg p-5">
                    <h3 className="text-gray-500">Chunks</h3>
                    <p className="text-xl font-bold">
                        {stats.chunks}
                    </p>
                </div>

                <div className="bg-slate-100 rounded-lg p-5">
                    <h3 className="text-gray-500">Python Files</h3>
                    <p className="text-xl font-bold">
                        {stats.python_files}
                    </p>
                </div>

                <div className="bg-slate-100 rounded-lg p-5">
                    <h3 className="text-gray-500">Markdown Files</h3>
                    <p className="text-xl font-bold">
                        {stats.markdown_files}
                    </p>
                </div>
                <div className="bg-green-100 rounded-lg p-5">
    <h3 className="text-gray-500">
        Status
    </h3>

    <p className="text-xl font-bold text-green-700">
        Indexed ✅
    </p>
</div>

                <div className="bg-slate-100 rounded-lg p-5">
                    <h3 className="text-gray-500">Config Files</h3>
                    <p className="text-xl font-bold">
                        {stats.config_files}
                    </p>
                
                </div>

            </div>

        </div>

    );

}