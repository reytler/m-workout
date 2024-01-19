import './style.css'

export function Obs({text}:{text: string}){
    return(
        <span className='observation'>
            Obs.: {text}
        </span>
    )
}