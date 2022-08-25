import React from 'react'
import { Link } from 'react-router-dom'

const SecondaryButton =({path, text}) => (
 
    <Link to={path} className="bg-primary-200 text-primary-100 font-medium hover:bg-blue-700 px-10 py-4 border border-primary-100">
    {text}
    
</Link>

);

export default SecondaryButton;
