import { useState, useCallback, useEffect } from "react" 

// React Router
import { NavLink, useNavigate } from "react-router";

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faArrowLeft, 
    faPaperclip,
    faClose, 
    faPlus 
} from '@fortawesome/free-solid-svg-icons'


// Flowbite
import { Button, createTheme, ThemeProvider } from 'flowbite-react'
import customTheme from '../styles/tailwind-theme.jsx'


// Components
// import Banner from '../components/Banner.jsx'
import TopNav from '../components/TopNav.jsx'
import MobileNav from '../components/MobileNav.jsx'
import { DropzoneComponent } from "../components/Dropzone.jsx";


export default function WishList(){

    const [files, setFiles] = useState([]);

    const navigate = useNavigate(); // Initialize the navig

    function submitWishlist(e){

        e.preventDefault()
    
        const formData = new FormData(e.target); // Create a FormData object from the form
        const data = Object.fromEntries(formData.entries()); // Convert FormData to a plain object

        if(files != ''){

            data.item_files = files

            navigate("/collections")
        }
        else{
            
            // Execute alert
            console.log('Empty')
        }
    }

    return (
        <div>

            {/* =================== TOP NAVIGATION ================= */}
                <TopNav />
            {/* =================== TOP NAVIGATION END ============= */}

            {/* =================== CONTENT ==================== */}
                <div className="min-h-[700px]" id="new_wishlist_div">

                    <div className="m-4 mt-10">
                        <h4 className="font-bold">
                            <NavLink to="/wishlist">
                                <FontAwesomeIcon className="mr-4" icon={faArrowLeft} />
                            </NavLink>
                            Create New Wishlist
                        </h4>
                    </div>

                    <form className="p-4" method="POST" onSubmit={ submitWishlist }>

                        <div className="form-group">
                            <p><b>Item Name: <span className="text-red-700">(*)</span></b></p>
                            <input 
                                type="text" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4" 
                                placeholder="Input item name here" 
                                name="item_name"
                                autocomplete="off" 
                                value="Isuzu Sportivo"
                                required />
                        </div>

                        <div className="form-group">
                            <p><b>URL/Link: <span className="text-red-700">(*)</span></b></p>
                            {/* <input 
                                type="text" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4" 
                                placeholder="Input URL or link here" 
                                autocomplete="off" 
                                required /> */}
                            <div class="flex shadow-xs rounded-base my-4">
                                <span class="inline-flex items-center px-3 text-sm text-body bg-neutral-tertiary border rounded-e-0 border-default-medium border-e-0 rounded-s-base">
                                    <FontAwesomeIcon icon={ faPaperclip }/>
                                </span>
                                <input 
                                    type="text"
                                    id="website-admin" 
                                    class="rounded-none rounded-e-base block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand placeholder:text-body" 
                                    placeholder="Input or paste URL here" 
                                    name="item_url" 
                                    value="Sample URL" />
                            </div>
                        </div>

                        <div className="form-group">
                            <p><b>Price: <span className="text-red-700">(*)</span></b></p>
                            <input 
                                type="number" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4" 
                                placeholder="Input price here" 
                                name="item_price" 
                                value="320000"
                                required />
                        </div>

                        <div className="form-group">
                            <p><b>Images: <span className="text-red-700">(*)</span></b></p>
                            <DropzoneComponent setFiles={setFiles} files={files} />
                        </div>

                        <div className="form-group">
                            <p><b>Notes:</b></p>
                            <textarea 
                                type="number" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4" 
                                placeholder="Input notes here" 
                                name="item_notes"
                                rows="7"
                                autocomplete="off" 
                                value="Sample notes" />
                        </div>

                        {/* <div className="form-group">
                            <div className="flex items-center justify-between">
                                <p><b>Collection: <span className="text-red-700">(*)</span></b></p>
                                <ThemeProvider theme={customTheme}>
                                    <Button 
                                        type="button" 
                                        color="light" 
                                        className="
                                            font-bold 
                                            rounded-md
                                            uppercase">
                                        <FontAwesomeIcon icon={ faPlus } className="mr-1"/>
                                        New
                                    </Button>
                                </ThemeProvider>
                            </div>
                            <select 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4"
                                name="" 
                                id="">
                                <option value="">Select collection here</option>
                            </select>
                        </div> */}

                        <ThemeProvider theme={customTheme}>
                            <Button 
                                type="submit" 
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
                                    uppercase">
                                Save
                            </Button>
                        </ThemeProvider>

                    </form>

                </div>
            {/* =================== CONTENT END ================ */}

            {/* =================== MOBILE NAVIGATION =============== */}
                <MobileNav />
            {/* =================== MOBILE NAVIGATION END =========== */}

        </div>
    )
}