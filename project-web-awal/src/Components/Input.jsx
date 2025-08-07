import React from "react"

function Input({type="text", placeholder, id}){
    return (
        <input type={type} placeholder={placeholder} id={id} className="border-2 w-70 rounded-md bg-white p-1 outline-none text-sm font-semibold" />
    )
}

export default Input;
