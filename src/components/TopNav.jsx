// Assets
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBell } from '@fortawesome/free-regular-svg-icons'

export default function TopNav(){
    
    const user_Id  = sessionStorage.getItem("userid")
    const fullname = sessionStorage.getItem("fullname")

    return (
        <div className="flex align-center justify-between min-h-[50px] p-2 sticky top-0 bg-white z-50">
            <div className="flex align-items-center">
                <img 
                    src="../../src/assets/images/user-139.png" 
                    className="w-10 h-10 rounded" 
                    alt="Profile Image" />
                <div className="ml-4">
                    <h4>Hello,</h4>
                    <h1 className="font-bold">{ fullname }</h1>
                </div>
            </div>
            <div>
                <button 
                    type="button" 
                    className="mt-3 uppercase bg-gray-50 hover:bg-gray-200 font-medium rounded-lg px-3 py-2 me-2 mb-2 focus:outline-none">
                    <ion-icon class="" name="cart-outline"></ion-icon>
                </button>
                <button 
                    type="button" 
                    className="mt-3 uppercase bg-gray-50 hover:bg-gray-200 font-medium rounded-lg px-3 py-2 me-2 mb-2 focus:outline-none">
                    <ion-icon class="" name="notifications-outline"></ion-icon>
                </button>
            </div>
        </div>
)
}