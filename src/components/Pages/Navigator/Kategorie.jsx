import React from 'react'
import DropDown from '../../DropDown'
import Formfield from '../../Formfield'





const Kategorie = ({ handle, data, title, decription }) => {
    
    return (
        <>
            <div className="flex flex-col py-4">
                <div className='flex justify-between items-end '>
                <h1>{title}</h1>
                <div className='bg-secondary-300 p-8 max-w-[50%]'>
                    <h2>Angebot</h2>
                    {decription}
                    <p>
                    Unter Angebot verstehen wir Produkte oder Dienstleistungen, die zur Erreichung einer zu erreichenden Zielsetzung angeboten werden. </p>
<p>Wir unterscheiden zwischen</p>
<ul className='list-disc px-8'>
    <li>Öffentlichen Angeboten (Gesundheit, Bildung, Verkehr etc.)</li>
    <li>Dienstleistungen und Produkte von privaten Anbietern</li>
    </ul> 



                </div>
                </div>

                <div className="bg-primary-100 h-1 w-32"></div>
                <Formfield onChange={handle} data={data.a} id="a" label="Öffentliche Angebote" placeholder={data.afrage} />
                <Formfield onChange={handle} data={data.b} id="b" label="Private Angebote" placeholder= {data.bfrage} />
                <Formfield onChange={handle} data={data.c} id="c" label="Benötigte Angebote" placeholder={data.cfrage} />
                <DropDown onChange={handle} data={data.d} id="d" label="Wie wichtig?" placeholder={data.dfrage}  />
            </div>


            
        </>
    )
}

export default Kategorie
