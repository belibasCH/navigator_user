import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'

function Willkommen() {
    return (<>
                <div className="basis-2/3 flex flex-col  p-6">
                    <div className="flex-1 flex flex-col justify-center">
                        <img className="object-none" src="img/navigator.png" alt="" />
                    </div>
                    <div className="flex-none flex justify-end gap-6">
                    <SecondaryButton text="Was ist der Navigator" path="/" />
                    <PrimaryButton text="Los gehts!" path="/Projektbeschreibung" />
                    </div>
               </div>
                <div className="basis-1/3">
                    <img className='object-cover h-full object-center' src="img/csc_ast.png" alt=""/>   
                </div>
          </>

    )
}

export default Willkommen
