import React from 'react'
import PrimaryButton from '../../PrimaryButton'
import Angebot from './Angebot'
import { useState } from 'react'



const NavigatorForm = ({ handle, data, weiter, zuruck, state}) => {
    const [rotation, setRotation] = useState(0)

    switch (state) {
        case 0:
            console.log('Angebot');
            return (<>
                <div className="flex flex-col justify-between p-16  z-10 overflow-scroll">
                    <Angebot handle={handle} data={data} weiter={weiter} zuruck={zuruck} title="Angebot" />
        
                </div></>);
            break;
        case 1:
            console.log('Rahmenbedingungen');
            return (<>
                <div className="flex flex-col justify-between p-16  z-10 overflow-scroll">
                    <Angebot handle={handle} data={data} weiter={weiter} zuruck={zuruck} title="Rahmenbedingungen" />


                </div></>);
            break;
        case 2:
            console.log('Geisteshaltung');
            return (<>
                <div className="flex flex-col justify-between p-16  z-10 overflow-scroll">
                    <Angebot handle={handle} data={data} weiter={weiter} zuruck={zuruck} title="Geisteshaltung" />


                    </div></>);
            break;
        case 3:
            console.log('Kompetenz');
            return (<>
                <div className="flex flex-col justify-between p-16  z-10 overflow-scroll">
                    <Angebot handle={handle} data={data} weiter={weiter} zuruck={zuruck} title="Kompetenz" />


                    </div></>);
            break;
        case 4:
            console.log('Infrastruktur');
            return (<>
                <div className="flex flex-col justify-between p-16  z-10 overflow-scroll">
                    <Angebot handle={handle} data={data} weiter={weiter} zuruck={zuruck} title="Infrastruktur" />


                    </div></>);
            break;
        case 5:
            console.log('Kommunikation');
            return (<>
                <div className="flex flex-col justify-between p-16  z-10 overflow-scroll">
                    <Angebot handle={handle} data={data} weiter={weiter} zuruck={zuruck} title="Kommunikation" />
                    </div></>);
            break;

    }

    return (
        <>
    
            <p>fehler</p>



        </>
    )
}

export default NavigatorForm
