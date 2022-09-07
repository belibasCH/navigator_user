import React from 'react'
import { useState } from 'react'
import NavigatorForm from './Navigator/NavigatorForm'
import { useNavigate   } from 'react-router-dom'



const Navigator = ({ handle, data }) => {
    const [state, setstate] = useState(0)
    const [rotation, setRotation] = useState(30)
    let navigate = useNavigate();

    const weiter = () => {
        console.log(state);
        if(state===5){
            navigate("/Person");
        };
        setstate(prevCount => prevCount + 1);
        var navigator = document.getElementById("navigator_image");
        setRotation(rotation + 60);
        navigator.style.transform = ('rotate(' + rotation + 'deg)');
        
    }
    const zuruck = () => {
        if(state===0){
            navigate("/Projektbeschreibung");
        };
        setstate(prevCount => prevCount - 1);
        var navigator = document.getElementById("navigator_image");
        setRotation(rotation - 60);
        navigator.style.transform = ('rotate(' + rotation + 'deg)');
    }


    return (
        <>
            <div className="md:basis-1/4 z-0">
                <img className="navigator md:absolute left-0 " id="navigator_image" src="img/Success_Navigator.svg" alt="" />
            </div>
            <div className="md:basis-3/4 flex flex-col justify-between p-8 md:p-16 z-10 overflow-auto md:overflow-hidden">
                <NavigatorForm handle={handle} data={data} weiter={weiter} zuruck={zuruck} state={state}></NavigatorForm>
                <div className="flex-none flex justify-end gap-6 pt-12">
                    <button onClick={zuruck} className="bg-primary-200 text-primary-100 font-medium hover:bg-blue-700 px-10 py-4 border border-primary-100">zuruck</button>
                    <button onClick={weiter} className="hover:animate-pulse bg-primary-100 font-medium hover:bg-blue-700 px-10 py-4 text-primary-200">weiter</button>
                </div>
            </div>


        </>
    )
}

export default Navigator
