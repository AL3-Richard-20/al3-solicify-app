const app_server_url    = import.meta.env.VITE_APP_SERVER
const supabase_url      = import.meta.env.VITE_SUPABASE_URL
const supabase_anon_key = import.meta.env.VITE_SUPABASE_ANON_KEY
const server_port       = import.meta.env.VITE_APP_PORT

export {
    app_server_url,
    supabase_url,
    supabase_anon_key,
    server_port
}