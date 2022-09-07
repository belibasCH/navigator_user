import React from 'react'
import './Navbar.css'
import ListItem from '../ListItem'


const Navbar = () => {
    return (
        <header className="fixed w-screen z-20">
            <nav className="">
                <ul className="flex flex-row h-16">
                    <ListItem link="/" text="Willkommen" color="bg-secondary-100"/>
                    <ListItem link="/Projektbeschreibung" text="Projektbeschreibung" color="bg-secondary-200"/>
                    <ListItem link="/Navigator" text="Navigator" color="bg-secondary-300"/>
                    <ListItem link="/Person" text="Abschluss" color="bg-secondary-400"/>


                    
                </ul>

            </nav>
        </header>
    )
}

export default Navbar
