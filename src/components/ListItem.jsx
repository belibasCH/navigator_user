import React from 'react'
import { NavLink } from 'react-router-dom';

function ListItem({link, text, color}) {
    return (

        <NavLink
            to={link}
            className={({ isActive }) =>
                (isActive ? 'bg-primary-100 text-primary-200 md:basis-1/4 grow flex justify-center place-items-center' :  color +" hidden md:flex basis-1/4 flex justify-center place-items-center")}>
            {text}
        </NavLink>




    )
}

export default ListItem