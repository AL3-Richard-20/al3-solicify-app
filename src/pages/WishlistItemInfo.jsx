import { useState } from 'react'
import { useNavigate } from 'react-router'

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

// Flowbite
import { Button, createTheme, ThemeProvider } from 'flowbite-react'
import customTheme from '../styles/tailwind-theme.jsx'

// Components
// import Banner from '../components/Banner.jsx'
import TopNav from '../components/TopNav.jsx'
import MobileNav from '../components/MobileNav.jsx'

export default function WishlistItemInfo(){

    const [activeImage, setActiveImage] = useState(0);

    const images = [
        "https://via.placeholder.com/400x200",
        "https://via.placeholder.com/400x200/aaaaaa",
        "https://via.placeholder.com/400x200/bbbbbb",
        "https://via.placeholder.com/400x200/cccccc",
        "https://via.placeholder.com/400x200/dddddd",
    ];

    return (
        <div>
            <div>

                {/* =================== TOP NAVIGATION ================= */}
                    <TopNav />
                {/* =================== TOP NAVIGATION END ============= */}

                <div className="min-h-[700px] bg-white overflow-hidden">

                    {/* Header */}
                    <div className="flex justify-between py-4 text-center font-semibold text-lg border-b">
                        <FontAwesomeIcon className="ml-4" icon={ faArrowLeft } />
                        <p>Item Information</p> 
                        <FontAwesomeIcon className="mr-4" icon={ faEllipsisVertical } />
                    </div>

                    {/* Main Image */}
                    <div className="w-full h-40 bg-gray-300 border border-gray-400">
                        <img
                            key={activeImage}
                            src={images[activeImage]}
                            alt="Product Preview"
                            className="w-full h-full object-cover transition-all duration-500 ease-in-out animate-fade"
                            />
                    </div>

                    {/* Thumbnail Row */}
                    <div className="flex gap-2 mt-3 p-4">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveImage(index)}
                                className={`w-12 h-10 rounded cursor-pointer overflow-hidden border transition-all duration-300 
                                ${
                                    activeImage === index
                                    ? "border-blue-600 scale-105"
                                    : "border-gray-400 hover:border-blue-500 hover:scale-105"
                                }`}
                            >
                                <img
                                src={img}
                                alt={`Thumbnail ${index}`}
                                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-300"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Product Info */}
                    <div className="mt-4 space-y-2 p-4">
                        <h2 className="font-semibold text-gray-800 text-base">
                            Item Name
                        </h2>

                        <p className="text-sm">
                            <span className="font-semibold text-gray-700">Link:</span>{" "}
                            <a href="#" className="text-blue-600 hover:underline">
                            Sample link
                            </a>
                        </p>

                        <p className="text-sm">
                            <span className="font-semibold text-gray-700">Price:</span> 0.00
                        </p>

                        <p className="text-sm font-semibold text-gray-700">Notes:</p>
                        <p className="text-sm text-gray-600 leading-snug">
                            Lorem Ipsum Dolor Sit Amet <br />
                            Con Estas Wishlist Item 1
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="m-4">
                        <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded">
                            I'LL BUY THIS
                        </button>
                    </div>

                </div>

                {/* =================== MOBILE NAVIGATION =============== */}
                    <MobileNav />
                {/* =================== MOBILE NAVIGATION END =========== */}

            </div>

        </div>
    );
}