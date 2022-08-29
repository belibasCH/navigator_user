import React, { useState } from 'react'
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Willkommen from "./components/Pages/Willkommen"
import Projektbeschreibung from "./components/Pages/Projektbeschreibung"
import Navigator from "./components/Pages/Navigator"
import Last from "./components/Pages/Last"


function App() {
    //const url = "http://localhost:8080/server";
    const [data, setData] = useState({

        projektname: "",
        projektbeschreibung: "",
        zielgruppe: "",
        ziel: "",
    })
    const handle = (e) => {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
   
    
    return ( 
        <BrowserRouter>
    <div className="text-gray-600 h-screen">
        <Navbar /> 
        <main className="h-full border-t-16">
            <div className="flex flex-row h-full">
                
        <Routes>
                <Route path="/" element={<Willkommen/>}/>        
                <Route path="/Projektbeschreibung" element={<Projektbeschreibung handle={handle} data={data}/>}/>   
                <Route path="/Navigator" element={<Navigator handle={handle} data={data}/>}/>  
                <Route path="/Last" element={<Last/>}/>  
                
            </Routes>
            
            </div>
        </main>
    </div>
        </BrowserRouter>
    );
}

export default App;