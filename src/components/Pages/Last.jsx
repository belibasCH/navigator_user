import React from 'react'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'
import FormfieldSmall from '../FormfieldSmall'


const Last = () => {
    return (
               <>
        <div className="md:basis-1/3 md:h-full h-48">             
           <img className='object-cover h-full w-full md:object-center object-top' src="img/bec.jpg" alt="" />
            </div>
            <div className="basis-2/3 flex flex-col p-8 md:p-16 md:overflow-y-scroll">
            <h1>Super gemacht!</h1>
                    <div className="bg-primary-100 h-1 w-32"></div>
                    <h2>Danke für deine Einreichung</h2>
                    <p>Wir senden dir in den nächsten Tagen eine Auswertung zu. Danke für dein Vertrauen in den Navigator</p>
            </div>

            
        </>
    )
}
export default Last
