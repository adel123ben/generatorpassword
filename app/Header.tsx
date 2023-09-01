"use client";

import Image from "next/image"




const Header = () => {

   
    return(
        <div className="flex flex-row p-11 justify-between">
            <img className="w-11 h-11 cursor-pointer" src="https://smiletutor.sg/wp-content/uploads/2020/10/password.png" alt="" />
            <div>
                <a href="https://github.com/adel123ben/generatorpassword">
                <button   className="border-0 rounded-full bg-neutral-950 text-white text-sm py-2 px-5">Github</button>
                </a>
                
            </div>
        </div>
    )
}

export default Header
