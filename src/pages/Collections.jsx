import { useNavigate } from 'react-router'

// Flowbite
import { Button, createTheme, ThemeProvider } from 'flowbite-react'
import customTheme from '../styles/tailwind-theme.jsx'

// Components
// import Banner from '../components/Banner.jsx'
import TopNav from '../components/TopNav.jsx'
import MobileNav from '../components/MobileNav.jsx'

export default function Collections() {

    const body_class    = 'min-h-[100vh]'
    const content_class = 'mb-[150px]'

    const anim_css_slideInLeft = 'animate__animated animate__slideInUp animate__bounce animate__faster'

    const navigate = useNavigate();

    const topChoices = [
        { id: 1, name: "Fashion" },
        { id: 2, name: "Meal Prep" },
    ];

    const allBoards = [
        { id: 3, name: "Coding / Tech" },
        { id: 4, name: "Fashion" },
    ];

    function BoardItem({ name }) {
        return (
            <button className="flex items-center gap-3 w-full hover:bg-gray-100 p-2 rounded-lg transition">
            <img
                src="https://via.placeholder.com/40"
                alt={name}
                className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="text-sm font-medium">{name}</span>
            </button>
        );
    }

    function skipCollection(){

        navigate('/wishlist')
    }

    return (

        <div className={ body_class }>

            {/* =================== TOP NAVIGATION ================= */}
                <TopNav />
            {/* =================== TOP NAVIGATION END ============= */}

            {/* Modal */}
            <div className={`${anim_css_slideInLeft} ${ content_class }`}>

                {/* Header */}
                <div className="py-4 text-center font-semibold text-lg border-b">
                    Save to Collection?
                </div>

                {/* Search */}
                <div className="p-4">
                    <div className="relative">
                        {/* <input
                            type="text"
                            placeholder="Search"
                            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                        /> */}
                        <input 
                            type="search" 
                            id="search" 
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
                            placeholder="Search" 
                            autoComplete="off" 
                            required />
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

                <div className="border-t p-4">
                    <ThemeProvider theme={customTheme}>
                        <Button 
                            type="button"
                            color="primary" 
                            className="
                                font-bold 
                                rounded-md
                                px-5 
                                py-2.5 
                                me-2
                                mt-2 
                                mb-2 
                                w-full
                                uppercase" 
                            onClick={ skipCollection }>
                            Skip
                        </Button>
                    </ThemeProvider>
                </div>



            </div>

            {/* =================== MOBILE NAVIGATION =============== */}
                <MobileNav />
            {/* =================== MOBILE NAVIGATION END =========== */}

        </div>
    );
}