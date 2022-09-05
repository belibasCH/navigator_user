import React from 'react';


const FormfieldSmall = ({ onChange, label, placeholder, data, id }) => {
    return (
        <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2 mt-4"  >{label}</label>
            <input onChange={onChange} id={id} defaultValue={data} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight h-10 focus:outline-none focus:shadow-outline" type="text" placeholder={placeholder} />
        </div>

    );
}

export default FormfieldSmall;
