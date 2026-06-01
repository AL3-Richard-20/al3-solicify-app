import ReactDOM from 'react-dom'

// React Router
import { NavLink } from "react-router-dom";

export default function MobileNav(){

    const flex_class = "flex items-center justify-between p-4 bg-white fixed bottom-[0px] w-[100%]"

    const navlink_icon              = "flex items-center justify-center p-3 w-12 h-12"
    const navlink_icon_size         = "text-2xl"
    const navlink_icon_size_center  = "text-5xl"

    const center_class      = "bg-purple-500 text-white rounded-full font-bold"
    const active_class      = "bg-purple-200 text-purple-700 rounded-full"

    const navbar_links = [
        { to: "/home", icon: 'home-outline', iscenter: false },
        { to: "/granted", icon: 'gift-outline', iscenter: false },
        { to: "/newwishlist", icon: 'add-outline', iscenter: true },
        { to: "/connections", icon: 'people-outline', iscenter: false },
        { to: "/login", icon: 'power-outline', iscenter: false  }
    ]

    return (
        <div className={ flex_class }>

            {   navbar_links.map(link => (
                    <NavLink 
                        key={link.to} 
                        to={link.to} 
                        className={ ({ isActive }) => `${navlink_icon} ${ link.iscenter ? center_class : "" } ${ isActive ? active_class : "" }` }>
                        <ion-icon 
                            class={ link.iscenter ? navlink_icon_size_center : navlink_icon_size } 
                            name={ link.icon }></ion-icon>
                    </NavLink>
                ))
            }

        </div>
    )
}