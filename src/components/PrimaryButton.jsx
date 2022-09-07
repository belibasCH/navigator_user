import React from 'react'
import { Link } from 'react-router-dom'

const PrimaryButton =({path, text, vote}) => (
 
    <Link to={path} onClick={vote} className="hover:animate-pulse bg-primary-100 font-medium hover:bg-blue-700 px-10 py-4 text-primary-200">
    {text}
    
</Link>

);

export default PrimaryButton;
