import React from 'react'

import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'
import Angebot from './Navigator/Angebot'
import Rahmenbedingungen from './Navigator/Rahmenbedingungen'
import { useState } from 'react'
import Formfield from '../Formfield'



import { BrowserRouter, Routes, Route } from "react-router-dom"

let server_url = "localhost:8080/server";

const Navigator = ({ handle, data }) => {
    const [token, setToken] = useState("");

    const vote = async (answer) => {

        const voteDTO = {
            token: token,
            answer: answer.message === "Yes",
        };
        const url =
            "http://" + server_url + "/navigators/1/answers";
        const request = new Request(url, {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify(data),
        });
        try {
            const response = await fetch(request);
            if (!response.ok) {
                throw Error(
                    "HTTP Status Code received: " + response.status
                );
            }
        } catch (error) {
            console.error(error);
        }

    };
    return (
        <>

            <div className="basis-1/3">
            <img className="navigator_shine absolute left-0 " src="img/nav_shine.svg" alt="" />
                <img className="navigator absolute left-0 " src="img/Success_Navigator.svg" alt="" />
                
            </div>
            <div className="basis-2/3 flex flex-col justify-between p-16">
                <div className="flex flex-col">
                    <h1>Angebot</h1>
                    <div className="bg-primary-100 h-1 w-32"></div>
                    <Formfield onChange={handle} data={data.projektname} label="1" placeholder="Was sind die öffentlich zugänglichen Angebote (in diesem Bereich)?" />
                    <Formfield onChange={handle} data={data.projektname} label="2" placeholder="Was sind die privatwirtschaftlichen Angebote?" />
                    <Formfield onChange={handle} data={data.projektname} label="3" placeholder="Was für Angebote werden zusätzlich benötigt?" />
                    <Formfield onChange={handle} data={data.projektname} label="4" placeholder="Wie wichtig sind die Angebote zur Erreichung des Ziels?" />
                    <button onClick={() => vote("jain")}>weiter</button>
                </div>

                <div className="flex-none flex justify-end gap-6">
                    <SecondaryButton text="zurück" path="/Projektbeschreibung" />
                    <PrimaryButton text="Abschliessen" path="/Last" />
                </div>

            </div>



        </>
    )
}

export default Navigator
