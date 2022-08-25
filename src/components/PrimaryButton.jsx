import React from 'react'
import { Link } from 'react-router-dom'

const PrimaryButton =({path, text}) => (
 
    <Link to={path} className="bg-primary-100 font-medium hover:bg-blue-700 px-10 py-4 text-primary-200">
    {text}
    
</Link>

);

export default PrimaryButton;
