import React from 'react'
import PrimaryButton from '../PrimaryButton'
import Angebot from './Navigator/Angebot'



const Navigator = ({ handle, data }) => {

    const rotateNavigator = ()=> {
        var navigator = document.getElementById("navigator_image");
        const turn = [
            { transform: 'translateY(-50%) rotate(-90deg)' }
          ];
        const timinig = {
            duration: 500,
          };
        navigator.animate(turn, timinig);
        navigator.style.transform("translateY(-50%) rotate(-90deg)");

    }

    return (
        <>
            <div className="basis-1/3 z-0">
                <img className="navigator_shine absolute left-0 " src="img/nav_shine.svg" alt="" />
                <img className="navigator absolute left-0 " id="navigator_image"src="img/Success_Navigator.svg" alt="" />

            </div>
            <div className="basis-2/3 flex flex-col justify-between p-16  z-10 overflow-scroll">
                <Angebot handle={handle} data={data}/>
                <button onClick={rotateNavigator}>Rotate</button>

                
            </div>



        </>
    )
}

export default Navigator
