import React from 'react';


const Formfield = ({handle, label, placeholder, data }) => (

    <div className="">
        <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" for={label}>{label}</label>
        <textarea onChange={ handle} id={label} value={data} name={label} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight h-20 focus:outline-none focus:shadow-outline" id="projektname" type="text" placeholder={placeholder} />
    </div>

);

export default Formfield;
