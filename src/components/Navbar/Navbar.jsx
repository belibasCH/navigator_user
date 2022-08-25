import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="fixed w-screen">

        <nav className="">
            <ul className="flex flex-row h-16">
                <Link to="/" className="bg-primary-100 text-primary-200 basis-1/4 flex justify-center place-items-center">
                <li >
                        Willkommen
                </li>
                </Link>
                <Link to="/Projektbeschreibung" className="bg-secondary-200 basis-1/4 flex justify-center place-items-center">
                <li >
                        Projektbeschreibung
                </li>
                </Link>
                <Link to="/Navigator" className="bg-secondary-300 basis-1/4 flex justify-center place-items-center">
                <li >
                        Navigator
                </li>
                </Link>
                <Link to="/Last" className="bg-secondary-400 basis-1/4 flex justify-center place-items-center">
                <li >
                        Danke!
                </li>
                </Link>
            </ul>

        </nav>
    </header>
    )
}

export default Navbar
