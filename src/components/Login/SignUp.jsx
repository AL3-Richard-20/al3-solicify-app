import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

export default function SignUp({ onFormSubmit }){

    const anim_css_slideInLeft = 'animate__animated animate__slideInLeft animate__bounce animate__faster'

    const localSubmit = (e) => {

        e.preventDefault();

        const formData = new FormData(e.target);
        
        const data = Object.fromEntries(formData.entries());

        onFormSubmit(data, e);
    }

    return (

        <div className={ anim_css_slideInLeft }>
            <form onSubmit={ localSubmit }>

                <div className="mt-2 mb-4">
                    <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Full Name</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <input 
                            type="text" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" 
                            id="wl_fullname" 
                            name="wl_fullname" 
                            placeholder="Input full name here"
                            defaultValue="Richard Altre" 
                            autoComplete="off" />
                    </div>
                </div>

                <div className="mt-2 mb-4">
                    <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Email</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <input 
                            type="email" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" 
                            id="wl_username" 
                            name="wl_username" 
                            placeholder="Input email or username here" 
                            defaultValue="richarddel.altre@uratex.com.ph"
                            autoComplete="off" />
                    </div>
                </div>

                <div className="mt-2 mb-4">
                    <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Password</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <FontAwesomeIcon icon={faLock} />
                        </div>
                        <input 
                            type="password" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" 
                            id="wl_password" 
                            name="wl_password" 
                            defaultValue="admin123 "
                            placeholder="Input password here" />
                    </div>
                </div>

                <button 
                    type="submit" 
                    className="
                        text-white 
                        bg-green-700 
                        hover:bg-green-800
                        rounded-md
                        px-5 
                        py-2.5 
                        me-2
                        mt-2 
                        mb-2 
                        w-full
                        uppercase 
                        font-bold">
                    Sign Up
                </button>

            </form>

        </div>
    )
}