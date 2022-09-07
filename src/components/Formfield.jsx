import React from 'react';


const Formfield = ({ onChange, label, placeholder, data, id }) => {

    return (
        <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2 mt-4"  >{placeholder}</label>
            <textarea onChange={onChange} id={id} value={data} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight h-20 focus:outline-none focus:shadow-outline" type="text" placeholder="" />
        </div>

    );
}

export default Formfield;
