import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface buttonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    value: string,
    width: number,
    height: number,
    fontSize: number
}

export function Button(props:buttonProps){
    return(
        <button
            style={{
            width: props.width,
            height: props.height,
            fontSize: props.fontSize,
            borderRadius:'5px',
            }}
        >
            {props.value}
        </button>
    )
}