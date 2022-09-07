import React from 'react'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'

function Willkommen() {
    return (<>
        <div className="md:basis-1/3 md:h-full  h-48">
            <img className='object-cover h-full w-full md:object-right object-top' src="img/csc_ast.png" alt="" />
        </div>
        <div className="basis-2/3 flex flex-col p-8 md:p-16">
            <div className="flex-1 flex flex-col justify-center">
                <img className="md:object-none" src="img/navigator.png" alt="" />
            </div>
            <div className="flex-none flex justify-end gap-6">
                <SecondaryButton text="Was ist der Navigator" path="/" />
                <PrimaryButton text="Los gehts!" path="/Projektbeschreibung" />
            </div>
        </div>

    </>

    )
}

export default Willkommen
