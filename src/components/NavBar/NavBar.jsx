import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from 'react-icons/hi';
import { MdOutlineRestaurantMenu } from "react-icons/md";



const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home', exact: true },
        { id: 2, path: '/about', name: 'About', exact: true },
        { id: 3, path: '/services', name: 'Services', exact: true },
        { id: 4, path: '/contact', name: 'Contact', exact: true },
        { id: 5, path: '/profile/:username', name: 'Profile', exact: false }
    ];

    return (
        <nav className="text-black bg-yellow-200 p-6 ">
            <div className="md:hidden text-xl" onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <MdOutlineRestaurantMenu></MdOutlineRestaurantMenu>
                        : <HiMenuAlt1 className=""></HiMenuAlt1>
                }

            </div>
            
            <ul className={`md:flex absolute duration-1000 md:static justify-end
                ${open ? 'top-16' : '-top-60'}
                bg-yellow-200 px-6 `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>
                    )
                }
            </ul>
        </nav>
    );
};

export default NavBar;