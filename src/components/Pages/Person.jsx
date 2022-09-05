import React from 'react'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'
import FormfieldSmall from '../FormfieldSmall'


const Person = ({ handle, data }) => {
    return (
               <>
        <div className="basis-1/3">
                <img className='object-cover h-full object-center' src="img/bec.jpg" alt="" />
            </div>
            <div className="basis-2/3 flex flex-col  p-16 overflow-y-scroll">
                <div className="flex-1 flex flex-col">
                    <h1>Fast geschafft!</h1>
                    <div className="bg-primary-100 h-1 w-32"></div>
                    <h2>Sagen Sie uns wer Sie sind</h2>
                    <form className="bg-white pt-6 pb-8 mb-4">

                        <FormfieldSmall onChange={handle} data= {data.name} label="Ihr Name" id="name" placeholder="Name" />
                        <FormfieldSmall onChange={handle} data={data.company} label="Ihre Organisation/Firma" id="company" placeholder="Firma" />
                        <FormfieldSmall onChange={handle} data={data.email} label="Ihre E-Mail Adresse" id="email" placeholder="E-Mail" />
                        <FormfieldSmall onChange={handle} data={data.tel} label="Ihre Telefonnummer" id="tel" placeholder="Telefonnummer" />
                    </form>

                </div>
                <div className="flex-none flex justify-end gap-6">
                    <SecondaryButton text="zurück" path="/" />
                    <PrimaryButton text="senden und abschlissen" path="/Last" />

                </div>
            </div>

            
        </>
    )
}

export default Person
