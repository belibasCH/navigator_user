import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'


function Projektbeschreibung() {
    return (
       <>
       <div className="basis-2/3 flex flex-col  p-6">
                    <div className="flex-1 flex flex-col">
                    <h1>Projektbeschreibung</h1>
                    <div class="bg-primary-100 h-1 w-32"></div>
                    <h2>Teilen Sie Ihre Idee</h2>

                    <div class="flex flex-wrap">
                        <div class="flex flex-col w-1/2">
                            <label for="projektbeschreibung">Projektbeschreibung</label>
                            <input type="text" class="w-full border border-primary-100" id="projektbeschreibung" name="fname"/>

                        </div>
                        <div class="w-1/2">
                            <p>Frage 2?</p>
                        </div>
                        <div class="w-1/2">
                            <p>Frage 3?</p>
                        </div>

                    </div>
                    </div>
                    <div className="flex-none flex justify-end gap-6">
                    <SecondaryButton text="zurück" path="/" />
                    <PrimaryButton text="weiter zum Navigator" path="/Navigator" />
                        
                    
                       
                    </div>
                    </div>
                
                <div className="basis-1/3">
                <img className='object-cover h-full object-center' src="img/leo.jpg" alt=""/>   
                </div>
            </>
    )
}

export default Projektbeschreibung
