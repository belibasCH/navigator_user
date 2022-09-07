import React from 'react';


const DropDown = ({ onChange, label, placeholder, data, id }) => {

    const changeRating = (e) => {
        e.target.id = "d";
        onChange(e);
    }

    return (
        <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2 mt-4"  >{placeholder}</label>
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-md border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                        <input onChange={changeRating} id="unrelevant"  type="radio" value="1" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="unrelevant" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">unrelevant</label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                        <input onChange={changeRating} id="relevant"  type="radio" value="2" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="relevant" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">relevant</label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                        <input onChange={changeRating} id="wichtig" type="radio" value="3" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="wichtig" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">wichtig</label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                        <input onChange={changeRating} id="sehr-wichtig" type="radio" value="4" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="sehr-wichtig" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">sehr wichtig</label>
                    </div>
                </li>
                <li className="w-full dark:border-gray-600">
                    <div className="flex items-center pl-3">
                        <input onChange={changeRating} id="extrem-wichtig" type="radio" value="5" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="extrem-wichtig" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">extrem wichtig</label>
                    </div>
                </li>
            </ul>
        </div>

    );
}

export default DropDown;
