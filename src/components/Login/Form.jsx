import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

export default function Form(){

    return (

        <div>
            <form>

                <div className="mt-2 mb-4">
                    <label for="email-address-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email or Username</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <input 
                            type="text" 
                            id="email-address-icon" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Input username here" 
                            autocomplete="off" />
                    </div>
                </div>

                <div className="mt-2 mb-4">
                    <label for="email-address-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <FontAwesomeIcon icon={faLock} />
                        </div>
                        <input 
                            type="password" 
                            id="email-address-icon" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Input username here" />
                    </div>
                </div>


                <button 
                    type="button" 
                    class="
                        text-white 
                        bg-green-700 
                        hover:bg-green-800
                        font-medium 
                        rounded-md
                        px-5 
                        py-2.5 
                        me-2
                        mt-2 
                        mb-2 
                        w-full
                        uppercase 
                        font-bold">
                    Sign In
                </button>


                <div className="text-center mt-3 mb-3">

                    <a href="#" className="text-center">I Forgot my Password</a>

                </div>

            </form>

        </div>
    )
}