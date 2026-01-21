import { useState, useCallback, useEffect } from "react" 

// React Router
import { NavLink } from "react-router";

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useDropzone } from 'react-dropzone';


// Flowbite
import { Button, createTheme, ThemeProvider } from 'flowbite-react'
import customTheme from '../styles/tailwind-theme.jsx'


// Components
// import Banner from '../components/Banner.jsx'
import TopNav from '../components/TopNav.jsx'
import MobileNav from '../components/MobileNav.jsx'

function DropzoneComponent() {

    const [files, setFiles] = useState([]);

    const onDrop = useCallback(acceptedFiles => {

        if(acceptedFiles?.length){

            const mappedFiles = acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }));

            setFiles(mappedFiles);
        }
        // This is where you process the files. 
        // You can set them to state, log them, or prepare for upload.
        console.log(acceptedFiles); 
    }, []);



    // ============= Functions ================
        function cleanUpPreviews(files){
            
            return () => {
                files.forEach(file => URL.revokeObjectURL(file.preview));
            };
        }
    // ============= Functions END ============
    


    // ============= Hooks =============
        useEffect(() => {
            cleanUpPreviews(files)
        }, [files]);
    // ============= Hooks END =========


    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': [] }
    });

    return (
        <div>
            <div className="flex items-center justify-center w-full" {...getRootProps()}>
                <input {...getInputProps()} />
                <label className="flex flex-col items-center justify-center w-full h-64 bg-neutral-secondary-medium border border-dashed border-default-strong rounded-base cursor-pointer hover:bg-neutral-tertiary-medium">
                    {
                        isDragActive ?
                        <p>Release to drop the files here</p> :
                        <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"/></svg>
                            <p className="mb-2 text-sm"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                    }
                </label>
            </div>
            <div className="mt-4 mb-4 flex flex-wrap gap-4 justify-center">
                {files.map(file => (
                    <div key={file.name} className="w-32 h-32 border rounded overflow-hidden flex items-center justify-center">
                        <img
                            src={file.preview}
                            alt={file.name}
                            className="object-cover w-full h-full rounded"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function WishList(){

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

                    <form className="p-4" method="POST">

                        <div className="form-group">
                            <p><b>item Name: <span className="text-red-700">(*)</span></b></p>
                            <input 
                                type="text" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4" 
                                placeholder="Input item name here" 
                                autocomplete="off" 
                                required />
                        </div>

                        <div className="form-group">
                            <p><b>URL/Link: <span className="text-red-700">(*)</span></b></p>
                            <input 
                                type="text" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4" 
                                placeholder="Input URL or link here" 
                                autocomplete="off" 
                                required />
                        </div>

                        <div className="form-group">
                            <p><b>Price: <span className="text-red-700">(*)</span></b></p>
                            <input 
                                type="number" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4" 
                                placeholder="Input URL or link here" 
                                autocomplete="off" 
                                required />
                        </div>

                        <div className="form-group">
                            <p><b>Images: <span className="text-red-700">(*)</span></b></p>
                            <DropzoneComponent />
                        </div>

                        <div className="form-group">
                            <p><b>Notes:</b></p>
                            <textarea 
                                type="number" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4" 
                                placeholder="Input notes here" 
                                rows="7"
                                autocomplete="off" />
                        </div>

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