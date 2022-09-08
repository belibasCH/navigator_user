import React, { useState } from 'react'
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Willkommen from "./components/Pages/Willkommen"
import Projektbeschreibung from "./components/Pages/Projektbeschreibung"
import Navigator from "./components/Pages/Navigator"
import Person from "./components/Pages/Person"
import Last from "./components/Pages/Last"

let server_url = "localhost:8080/server";

function App() {
    const [navigator, setNavigator] = useState({
        id: "",
        person: {
            name: "",
            company: "",
            email: "",
            tel: ""
        },
        projekt: {
            projektname: "",
            projektbeschreibung: "",
            zielgruppe: "",
            ziel: ""
        },

        tool: {
            id: 1,
            angebot: {
                afrage: "Was sind die öffentlich zugänglichen Angebote?",
                a: "",
                bfrage: "Was sind die privatwirtschaftlichen Angebote?",
                b: "",
                cfrage: "Was für Angebote werden zusätzlich benötigt?",
                c: "",
                dfrage: "Wie wichtig sind die Angebote zur Erreichung des Ziels?",
                d: 0

            },
            rahmenbedingungen: {
                afrage: "Welche Rahmenbedingungen sind für Sie relevant und beeinflussbar?",
                a: "",
                bfrage: "Welche Rahmenbedingungen sind für Sie relevant und nicht beeinflussbar?",
                b: "",
                cfrage: "Was müsste sich in den Rahmenbedingungen ändern, um Ihr Ziel zu erreichen?",
                c: "",
                dfrage: "Wie wichtig sind die Rahmenbedingungen für die Zielerreichung?",
                d: 0
            },
            geisteshaltung: {
                afrage: "Welche Haltung und Motivation haben die Befürworter der Zielsetzung?",
                a: "",
                bfrage: "Welche Haltung und Motivation haben die Gegner der Zielsetzung?",
                b: "",
                cfrage: "Was müsste sich in der Haltung und Motivation verändern, um das Ziel zu erreichen?",
                c: "",
                dfrage: "Wie wichtig ist diese Veränderung zur Erreichung des Ziels?",
                d: 0
            },
            kompetenz: {
                afrage: "Welche Wissen und Fertigkeiten sind bereits vorhanden?",
                a: "",
                bfrage: "Welche Wissen und Fertigkeiten werden zusätzlich benötigt?",
                b: "",
                dfrage: "Wie wichtig sind Wissen und Fertigkeiten zur Erreichung des Ziels",
                d: 0
            },
            infrastruktur: {
                afrage: "Welche digitale Infrastruktur ist bereits vorhanden?",
                a: "",
                bfrage: "Welche physische Infrastruktur ist bereits vorhanden?",
                b: "",
                cfrage: "Was für Infrastruktur wird zusätzlich benötigt?",
                c: "",
                dfrage: "Wie wichtig ist die physische Infrastruktur für die Erreichung der Ziele?",
                d: 0
            },
            kommunikation: {
                afrage: "Beschreiben Sie die Kommunikation nach innen mit involvierten Personen/Organisationen",
                a: "",
                bfrage: "Beschreiben Sie die Kommunikation nach aussen",
                b: "",
                cfrage: "Wie müsste die Kommunikation verbessert werden, um das Ziel zu erreichen?",
                c: "",
                dfrage: "Wie wichtig ist die Kommunikation zur Erreichung des Ziels?",
                d: 0
            }

        }


    })

    function handleProjectdescription(e) {
        const newdata = { ...navigator }
        newdata.projekt[e.target.id] = e.target.value
        setNavigator(newdata)
        console.log(newdata)
    }
    function handlePerson(e) {
        const newdata = { ...navigator }
        newdata.person[e.target.id] = e.target.value
        setNavigator(newdata)
        console.log(newdata)
    }
    function handleNavigatorAngebot(e) {
        const newdata = { ...navigator }
        newdata.tool.angebot[e.target.id] = e.target.value
        setNavigator(newdata)
        console.log(newdata)
    }
    function handleNavigatorRahmenbedingungen(e) {
        const newdata = { ...navigator }
        newdata.tool.rahmenbedingungen[e.target.id] = e.target.value
        setNavigator(newdata)
        console.log(newdata)
    }
    function handleNavigatorGeisteshaltung(e) {
        const newdata = { ...navigator }
        newdata.tool.geisteshaltung[e.target.id] = e.target.value
        setNavigator(newdata)
        console.log(newdata)
    }
    function handleNavigatorKompetenz(e) {
        const newdata = { ...navigator }
        newdata.tool.kompetenz[e.target.id] = e.target.value
        setNavigator(newdata)
        console.log(newdata)
    }
    function handleNavigatorInfrasturktur(e) {
        const newdata = { ...navigator }
        newdata.tool.infrastruktur[e.target.id] = e.target.value
        setNavigator(newdata)
        console.log(newdata)
    }
    function handleNavigatorKommunikation(e) {
        const newdata = { ...navigator }
        newdata.tool.kommunikation[e.target.id] = e.target.value
        setNavigator(newdata)
        console.log(newdata)
    }
    const handler = {
        angebot: handleNavigatorAngebot,
        rahmenbedingungen: handleNavigatorRahmenbedingungen,
        geisteshaltung: handleNavigatorGeisteshaltung,
        kompetenz: handleNavigatorKompetenz,
        infrastruktur: handleNavigatorInfrasturktur,
        kommunikation: handleNavigatorKommunikation,

    }

    //const [token, setToken] = useState("");


    const vote = async (answer) => {
        const url =
            "http://" + server_url + "/navigators";
        const request = new Request(url, {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify(navigator),
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
        <BrowserRouter>
            <div className="text-gray-600 h-screen">
                <Navbar />
                <main className="h-full border-t-16">
                    <div className="flex md:flex-row flex-col h-full">
                        <Routes>
                            <Route path="/" element={<Willkommen />} />
                            <Route path="/Projektbeschreibung" element={<Projektbeschreibung handle={handleProjectdescription} data={navigator} />} />
                            <Route path="/Navigator" element={<Navigator handle={handler} data={navigator} />} />
                            <Route path="/Person" element={<Person handle={handlePerson} vote={vote} data={navigator} />} />
                            <Route path="/Last" element={<Last />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;