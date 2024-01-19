import { HTMLAttributes } from "react";
import './style.css'

interface propsButtontimer extends HTMLAttributes<HTMLButtonElement>{
    color: string
}

export function Button({onClick,children,color}:propsButtontimer){
    return(
        <button onClick={onClick} className="btnTimer" style={{background: color}}>
            {children}
        </button>
    )
}