import React from "react"

function Input({type="text", placeholder, id, value, onChange, className}){
    return (
        <input type={type} placeholder={placeholder} id={id} className={className} value={value} onChange={onChange} />
    )
}

export default Input;
