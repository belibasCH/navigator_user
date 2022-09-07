import React from 'react'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'
import Formfield from '../Formfield'

import FormfieldSmall from '../FormfieldSmall'


const Projektbeschreibung= ({handle, data}) =>{

    return (
        <>
         <div className="md:basis-1/3 md:h-full  h-48">
                <img className='object-cover h-full w-full md:object-center object-top' src="img/leo.jpg" alt="" />
            </div>
            <div className="basis-2/3 flex flex-col p-8 md:p-16 overflow-y-scroll">
                <div className="flex-1 flex flex-col">
                    <h1>Projektbeschreibung</h1>
                    <div className="bg-primary-100 h-1 w-32"></div>
                    <h2>Teilen Sie Ihre Idee</h2>
                    <form className="bg-white pt-6 pb-8 mb-4">

                        <FormfieldSmall onChange={handle} data= {data.projektname} label="Projektname" id="projektname" placeholder="Geben Sie Ihrem Projekt einen Titel" />
                        <Formfield onChange={handle} data={data.problemstellung} label="Problemstellung" id="problemstellung" placeholder="Beschreiben Sie Ihre Problemstellung" />
                        <Formfield onChange={handle} data={data.zielgruppe} label="Zielgruppe" id="zielgruppe" placeholder="Welche Akteure/Personen/Organisationen wollen Sie ansprechen?" />
                        <Formfield onChange={handle} data={data.ziel} label="Ziel" id="ziel" placeholder="Welche Wirkung wollen Sie bei dieser Zielgruppe erzielen?" />
                    </form>

                </div>
                <div className="flex-none flex justify-end gap-6">
                    <SecondaryButton text="zurück" path="/" />
                    <PrimaryButton text="weiter zum Navigator" path="/Navigator" />

                </div>
            </div>

            
        </>
    )
}

export default Projektbeschreibung
