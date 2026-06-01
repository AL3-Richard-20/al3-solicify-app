import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Banner from '../components/Banner.jsx'

import Form from '../components/Login/Form.jsx'
import SignUp from '../components/Login/SignUp.jsx'

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import AuthInteg from '../components/AuthInInteg.jsx'

import { createClient } from '@supabase/supabase-js'
// import { UserAuth } from '../context/auth.jsx';

import { 
    app_server_url,
    supabase_url,
    supabase_anon_key,
    server_port } from '../utils/envVariables.js';


export default function Login(){

    // const { session } = UserAuth();
    const navigate = useNavigate()

    const MySwal = withReactContent(Swal);

    const showJSXAlert = (icon, title, description) => {
        MySwal.fire({
            title: title,
            html: description,
            icon: icon
        });
    };

    const api_url = app_server_url+":"+server_port;

    const supabase = createClient(supabase_url, supabase_anon_key)


    // ============= States ================
        const [loading, setLoading] = useState(false)
        const [integ_action, setIntegAction] = useState('Sign Up')
        const [bannertype, setBannerType] = useState("Log In")
    // ============= States END ============

    // ============= Sign Up ================
        const register = async (form_data, e) => {
            
            e.preventDefault()

            const formData = new FormData(e.target);

            var fullname = form_data.wl_fullname
            var username = form_data.wl_username
            var password = form_data.wl_password
            
            let result=true

            // ============== SUPABASE SIGN UP =============
            // ============== SUPABASE SIGN UP END =========
            
            const { data, error } = await supabase.auth.signUp({
                email: username,
                password: password,
                options: {
                    data: {
                        full_name: fullname,
                    },
                }
            })
            
            if (error){ result = error }
            else{ result = data }


            if(error !== null){

                if(error.code == 'user_already_exists'){
    
                    showJSXAlert('error', 'USER ALREADY REGISTERED', 'Please try again.')
    
                    result = false
                }
            }


            
            if(result){ 

                // let sample_supabase_result = {
                //     "access_token": "eyJhbGciOiJFUzI1NiIsImtpZCI6ImE1MzBkZDNhLWQyNWYtNGI4My1hYTM5LTM0MTliZjE0ZmZmMSIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3R6d3didWt6eHZtbWprYm5uemh0LnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJiYjgxZmZhMS1iMDg2LTRlMmEtODVjNC03MDU1NWIzNTE3Y2UiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzc2MDUzNTkyLCJpYXQiOjE3NzYwNDk5OTIsImVtYWlsIjoicmljaGFyZGRlbC5hbHRyZUB1cmF0ZXguY29tLnBoIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbCI6InJpY2hhcmRkZWwuYWx0cmVAdXJhdGV4LmNvbS5waCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmdWxsX25hbWUiOiJSaWNoYXJkIEFsdHJlIiwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJzdWIiOiJiYjgxZmZhMS1iMDg2LTRlMmEtODVjNC03MDU1NWIzNTE3Y2UifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTc3NjA0OTk5Mn1dLCJzZXNzaW9uX2lkIjoiYjQ3ZTRlNjktMGUzZS00NjcxLWI5ZDMtNTMwMmMxZDgwYWIwIiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.ILPbM8P0kLMzbrJZtkuCGp0A37DyOGoufz5ugyaVKpCOYuUydn-nx4s2blaG4YWnmXfyd7Qrlqs9Nh3Keimr8w",
                //     "token_type": "bearer",
                //     "expires_in": 3600,
                //     "expires_at": 1776053592,
                //     "refresh_token": "fhl2ltwiruob",
                //     "user": {
                //         "id": "bb81ffa1-b086-4e2a-85c4-70555b3517ce",
                //         "aud": "authenticated",
                //         "role": "authenticated",
                //         "email": "richarddel.altre@uratex.com.ph",
                //         "email_confirmed_at": "2026-04-13T03:13:12.15471209Z",
                //         "phone": "",
                //         "last_sign_in_at": "2026-04-13T03:13:12.165427993Z",
                //         "app_metadata": {
                //             "provider": "email",
                //             "providers": [
                //                 "email"
                //             ]
                //         },
                //         "user_metadata": {
                //             "email": "richarddel.altre@uratex.com.ph",
                //             "email_verified": true,
                //             "full_name": "Richard Altre",
                //             "phone_verified": false,
                //             "sub": "bb81ffa1-b086-4e2a-85c4-70555b3517ce"
                //         },
                //         "identities": [
                //             {
                //                 "identity_id": "34f01eba-ff73-4547-97ff-c3d1a62e5d16",
                //                 "id": "bb81ffa1-b086-4e2a-85c4-70555b3517ce",
                //                 "user_id": "bb81ffa1-b086-4e2a-85c4-70555b3517ce",
                //                 "identity_data": {
                //                     "email": "richarddel.altre@uratex.com.ph",
                //                     "email_verified": true,
                //                     "full_name": "Richard Altre",
                //                     "phone_verified": false,
                //                     "sub": "bb81ffa1-b086-4e2a-85c4-70555b3517ce"
                //                 },
                //                 "provider": "email",
                //                 "last_sign_in_at": "2026-04-13T03:13:12.145656709Z",
                //                 "created_at": "2026-04-13T03:13:12.145706Z",
                //                 "updated_at": "2026-04-13T03:13:12.145706Z",
                //                 "email": "richarddel.altre@uratex.com.ph"
                //             }
                //         ],
                //         "created_at": "2026-04-13T03:13:12.123707Z",
                //         "updated_at": "2026-04-13T03:13:12.191533Z",
                //         "is_anonymous": false
                //     }
                // }

                let access_token  = result.session.access_token
                let refresh_token = result.session.refresh_token
                let supabase_uuid = result.user.id
                let provider      = result.user.identities[0].provider

                formData.append('uuid', supabase_uuid);
                formData.append('accesstoken', access_token);
                formData.append('refreshtoken', refresh_token);
                formData.append('provider', provider);
                
                // ================ Insert to Database =================
                    try {

                        setLoading(true);

                        await fetch(
                            api_url+'/create-user', 
                            {
                                method: 'POST',
                                body: formData
                            }
                        )
                        .then(response => response.json())
                        .then(result => console.log('Success:', result))
                        .catch(error => console.error('Error:', error));
                    } 
                    catch (error) {

                        console.error('Error:', error);
                    }
                    finally {

                        setLoading(false);
                    }
                // ================ Insert to Database END =============

                // ================ Set Sessions and Cookies ===========
                // ================ Set Sessions and Cookies END =======
            }

            return result
        }
    // ============= Sign Up END ============

    // ============= Sign In ================
        const login = async (form_data, e) => {

            e.preventDefault()

            const formData = new FormData(e.target);

            let is_valid = true
            let result = ''
            var email = form_data.wl_username
            var password = form_data.wl_password

            const { data, error } = await supabase.auth.signInWithPassword({
                email,  
                password 
            })
            
            if (error) {

                showJSXAlert('error', error, 'Please try again.')

                is_valid=false

                return
            }

            let access_token  = data.session.access_token
            let refresh_token = data.session.refresh_token
            let supabase_uuid = data.user.id
            let provider      = data.user.identities[0].provider

            formData.append('supabase_uuid', supabase_uuid);
            formData.append('access_token', access_token);
            formData.append('refresh_token', refresh_token);
            formData.append('provider', provider);

            try {

                setLoading(true)

                fetch(api_url+'/save-session', { method: 'POST', body: formData })
                .then(response => response.json())
                .then(save_session => {

                    return fetch(api_url+'/login-user', { method: 'POST', body: formData })
                })
                .then(response => response.json())
                .then(user_info => {
                    sessionStorage.setItem("userid", user_info.userId);
                    sessionStorage.setItem("fullname", user_info.userFullname);
                    sessionStorage.setItem("profilepic", user_info.userProfilePic);
                })
                .catch(error => {

                    is_valid = false
                });

                if(is_valid){

                    navigate('/home')
                }
            } 
            catch (error) {

                showJSXAlert('error', error, 'Please contact your developer')
            }
            finally{

                setLoading(false)
            }
        }
    // ============= Sign In END ============

    if(loading) {

        return <div>

            <div className="w-full h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-lg"></span>
                Loading...
            </div>
        </div>
    }
    else{

        return (
    
            <div>
                
                <Banner bannertype={bannertype} />
    
                <div className="mr-7 ml-7">
    
                    <h4 className="font-bold uppercase text-center mb-8 text-2xl">My Wishlist</h4>
    
                    { 
                        (integ_action == 'Sign Up') ? 
                        <Form onFormSubmit={ login } /> : 
                        <SignUp onFormSubmit={ register } />
                    }
    
                    <AuthInteg integaction={ integ_action } setIntegAction={ setIntegAction } />
    
                </div>
    
            </div>
        )
    }
}