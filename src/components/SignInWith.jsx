import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
// import { faGooglePlusG } from '@fortawesome/free-solid-svg-icons'

export default function SignInWith(){

    return (
        <div className="flex items-center flex-col justify-center mt-10">
            
            <p>or Sign In with: </p>

            <div>
                <button 
                    type="button" 
                    className="m-2">
                    <h4 className="text-3xl text-red-500"><FontAwesomeIcon icon={faGooglePlusG} /></h4>
                </button>
                <button 
                    type="button" 
                    className="m-2">
                    <h4 className="text-3xl text-blue-500"><FontAwesomeIcon icon={faFacebook} /></h4>
                </button>
            </div>

        </div>
    )
}