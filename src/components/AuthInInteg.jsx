import ReactDOM from 'react-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
// import { faGooglePlusG } from '@fortawesome/free-solid-svg-icons'

export default function AuthInteg({ integaction, setIntegAction }){ 

    const reverse_integ_action = integaction == 'Sign In' ? 'Sign Up' : 'Sign In'

    return (
        <div className="flex items-center flex-col justify-center mt-10">
            
            <p className="text-gray-500">or { reverse_integ_action } with: </p>

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

            <div className="text-center mt-3 mb-3">

                <a href="#" className="text-center">

                <div>

                    {
                        integaction == 'Sign Up' 
                        ? <>
                            <span className="text-gray-500">Don't have an account? </span>
                            <span className="text-blue-500 font-bold" onClick={() => setIntegAction('Sign In') }>{ integaction }</span>
                            </>
                        : <>
                            <span className="text-gray-500">Already have an account? </span>
                            <span className="text-blue-500 font-bold" onClick={() => setIntegAction('Sign Up') }>{ integaction }</span>
                        </>
                    }

                </div>
                    
                </a>

            </div>

        </div>
    )
}