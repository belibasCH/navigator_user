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
    //const url = "http://localhost:8080/server";
    const [data, setData] = useState({
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
    
        navigator: {
            id: 1,
            angebot: {
                a: "",
                b: "",
                c: "",
                d: 0
            },
            rahmenbedingungen: {
                a: "",
                b: "",
                c: "",
                d: 0
            },
            geisteshaltung: {
                a: "",
                b: "",
                c: "",
                d: 0
            },
            kompetenz: {
                a: "",
                b: "",
                c: "",
                d: 0
            },
            infrastruktur: {
                a: "",
                b: "",
                c: "",
                d: 0
            },
            kommunikation: {
                a: "",
                b: "",
                c: "",
                d: 0
            }
           
        }
    
    
    })
    
    function handleProjectdescription(e) {
        const newdata = { ...data }
        newdata.projekt[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    function handlePerson(e) {
        const newdata = { ...data }
        newdata.projekt[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    function handleNavigator(e) {
        const newdata = { ...data }
        newdata.navigator['angebot'][e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

     //const [token, setToken] = useState("");


     const vote = async (answer) => {

        // const voteDTO = {
        //     token: token,
        //     answer: answer.message === "Yes",
        // };
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
        <BrowserRouter>
    <div className="text-gray-600 h-screen">
        <Navbar /> 
        <main className="h-full border-t-16">
            <div className="flex flex-row h-full">
                
        <Routes>
                <Route path="/" element={<Willkommen/>}/>        
                <Route path="/Projektbeschreibung" element={<Projektbeschreibung handle={handleProjectdescription} data={data}/>}/>   
                <Route path="/Navigator" element={<Navigator handle={handleNavigator} data={data}/>}/>  
                <Route path="/Person" element={<Person handle={handlePerson} data={data}/>}/>  
                <Route path="/Last" element={<Last/>}/>  
                
            </Routes>
            
            </div>
        </main>
    </div>
        </BrowserRouter>
    );
}

export default App;