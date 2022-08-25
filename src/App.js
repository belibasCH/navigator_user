import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidepicture from './components/Sidepicture'
import Willkommen from "./components/Pages/Willkommen"
import Projektbeschreibung from "./components/Pages/Projektbeschreibung"
import Navigator from "./components/Pages/Navigator"
import Last from "./components/Pages/Last"


function App() {
    
    return ( 
        <BrowserRouter>
    <div className="text-gray-600 h-screen">
        <Navbar /> 
        <main className="h-full border-t-16">
            <div className="flex flex-row h-full">
                
        <Routes>
                <Route path="/" element={<Willkommen/>}/>        
                <Route path="/Projektbeschreibung" element={<Projektbeschreibung/>}/>   
                <Route path="/Navigator" element={<Navigator/>}/>  
                <Route path="/Last" element={<Last/>}/>  
                
            </Routes>
            
            </div>
        </main>
    </div>
        </BrowserRouter>
    );
}

export default App;