import React from "react"

function Button({name, onClick}) {
    return (
        <button onClick={onClick} className="border-none w-50  bg-blue-800 rounded-xl p-1 font-bold text-white shadow-xl">{name}</button>
    )
}

export default Button;