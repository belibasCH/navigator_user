import React from 'react'
import DropDown from '../../DropDown'
import Formfield from '../../Formfield'
import PrimaryButton from '../../PrimaryButton'
import SecondaryButton from '../../SecondaryButton'




const Angebot = ({ handle, data }) => {
    return (
        <>
            <div className="flex flex-col">
                    <h1>Angebot</h1>
                    <div className="bg-primary-100 h-1 w-32"></div>
                    <Formfield onChange={handle} data={data.navigator.angebot.a} id="a" label="Öffentliche Angebote" placeholder="Was sind die öffentlich zugänglichen Angebote (in diesem Bereich)?" />
                    <Formfield onChange={handle} data={data.navigator.angebot.b} id="b" label="Private Angebote" placeholder="Was sind die privatwirtschaftlichen Angebote?" />
                    <Formfield onChange={handle} data={data.navigator.angebot.c} id="c" label="Benötigte Angebote" placeholder="Was für Angebote werden zusätzlich benötigt?" />
                    <DropDown onChange={handle} data={data.navigator.angebot.d} id="d" label="Wie wichtig?" placeholder="Wie wichtig sind die Angebote zur Erreichung des Ziels?" />
                </div>
            

                <div className="flex-none flex justify-end gap-6 py-12">
                    <SecondaryButton text="zurück" path="/Projektbeschreibung" />
                    <PrimaryButton text="weiter" path="/Person" />
                </div>
            </>
    )
}

export default Angebot
