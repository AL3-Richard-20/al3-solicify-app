export default function Collections(){

    const topChoices = [
        { id: 1, name: "Fashion" },
        { id: 2, name: "Meal Prep" },
    ];

    const allBoards = [
        { id: 3, name: "Coding / Tech" },
        { id: 4, name: "Fashion" },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            {/* Modal */}
            <div className="w-[360px] bg-white rounded-2xl shadow-lg overflow-hidden">

            {/* Header */}
            <div className="py-4 text-center font-semibold text-lg border-b">
                Save
            </div>

            {/* Search */}
            <div className="p-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                    <svg
                        className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35M16.65 11.5a5.15 5.15 0 11-10.3 0 5.15 5.15 0 0110.3 0z"
                        />
                    </svg>
                </div>
            </div>

            {/* Content */}
            <div className="px-4 pb-2 max-h-[420px] overflow-y-auto">

                {/* Top Choices */}
                <p className="text-xs text-gray-500 mb-2">Top choices</p>
                <div className="space-y-3 mb-4">
                    {topChoices.map(board => (
                        <BoardItem key={board.id} name={board.name} />
                    ))}
                </div>

                {/* All Boards */}
                <p className="text-xs text-gray-500 mb-2">All boards</p>
                <div className="space-y-3">
                    {allBoards.map(board => (
                        <BoardItem key={board.id} name={board.name} />
                    ))}
                </div>
            </div>

            {/* Create Board */}
            <div className="border-t p-4">
                <button className="flex items-center gap-3 w-full text-sm font-medium hover:bg-gray-100 p-2 rounded-lg transition">
                    <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center text-xl">
                        +
                    </div>
                    Create board
                </button>
            </div>
            </div>
        </div>
    );
}