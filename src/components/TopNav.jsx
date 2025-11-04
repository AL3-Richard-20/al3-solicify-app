// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'

export default function TopNav(){

    return (
        <div className="flex align-center justify-between min-h-[50px] p-2 sticky top-0 bg-white z-50">
            <div className="flex align-items-center">
                <img 
                    src="../../src/assets/images/user-139.png" 
                    class="w-10 h-10 rounded" 
                    alt="Profile Image" />
                <div className="ml-4">
                    <h4>Hello,</h4>
                    <h1 className="font-bold">Username</h1>
                </div>
            </div>
            <button 
                type="button" 
                className="mt-3 uppercase bg-gray-100 hover:bg-gray-200 font-medium rounded-lg px-3 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <FontAwesomeIcon icon={ faBell } />
            </button>
        </div>
)
}