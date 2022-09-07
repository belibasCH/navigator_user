import React from 'react'
import DropDown from '../../DropDown'
import Formfield from '../../Formfield'





const Kategorie = ({ handle, data, title }) => {
    
    return (
        <>
            <div className="flex flex-col py-4">
                <h1>{title}</h1>
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
