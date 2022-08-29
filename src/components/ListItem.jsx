import React from 'react'
import { NavLink } from 'react-router-dom';

function ListItem({link, text, color}) {
    return (

        <NavLink
            to={link}
            className={({ isActive }) =>
                (isActive ? 'bg-primary-100 text-primary-200 basis-1/4 flex justify-center place-items-center' :  color +" basis-1/4 flex justify-center place-items-center")}>
            {text}
        </NavLink>




    )
}

export default ListItem