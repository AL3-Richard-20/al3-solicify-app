import { useState } from 'react'
import Banner from '../components/Banner.jsx'
import Form from '../components/Login/Form.jsx'
import SignInWith from '../components/SignInWith.jsx'

export default function Login(){

    const [bannertype, setBannerType] = useState("Log In")

    return (
        <div>
            
            <Banner bannertype={bannertype} />

            <div className="mr-7 ml-7">

                <h4 className="font-bold uppercase text-center mt-7 mb-8 text-2xl">My Wishlist</h4>

                <Form />

                <SignInWith />

            </div>

        </div>
    )
}