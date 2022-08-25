import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'


function Navigator() {
    return (
       <>
       <div className="basis-2/3 flex flex-col  p-6">
                    <div className="flex-1 flex flex-col">
                    
                    </div>
                    <div className="flex-none flex justify-end gap-6">
                    <SecondaryButton text="zurück" path="/Projektbeschreibung" />
                    <PrimaryButton text="Abschliessen" path="/Last" />
                       
                    </div>
                    </div>
                
                <div className="basis-1/3">
                <img className='object-cover h-full object-center' src="img/leo.jpg" alt=""/>   
                </div>
            </>
    )
}

export default Navigator
