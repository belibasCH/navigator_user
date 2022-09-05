import React from 'react'
import { useState } from 'react'
import NavigatorForm from './Navigator/NavigatorForm'



const Navigator = ({ handle, data }) => {
    const [state, setstate] = useState(0)
    const [rotation, setRotation] = useState(30)


    const weiter = () => {
        setstate(prevCount => prevCount + 1);
        var navigator = document.getElementById("navigator_image");
        setRotation(rotation + 60);
        navigator.style.transform = ('translateY(-50%) rotate(' + rotation + 'deg)');
    }
    const zuruck = () => {
        setstate(prevCount => prevCount - 1);
        var navigator = document.getElementById("navigator_image");
        setRotation(rotation - 60);
        navigator.style.transform = ('translateY(-50%) rotate(' + rotation + 'deg)');
    }


    return (
        <>
            <div className="basis-1/3 z-0">
                <img className="navigator_shine absolute left-0 " src="img/nav_shine.svg" alt="" />
                <img className="navigator absolute left-0 " id="navigator_image" src="img/Success_Navigator.svg" alt="" />
            </div>
            <div className="flex flex-col justify-between">
                <NavigatorForm handle={handle} data={data} weiter={weiter} zuruck={zuruck} state={state}></NavigatorForm>
                <div className="flex-none flex justify-end gap-6 py-12">
                    <button onClick={zuruck}>zuruck</button>
                    <button onClick={weiter}>weiter</button>
                </div>
            </div>


        </>
    )
}

export default Navigator
