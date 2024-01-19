import './style.css'
export function Root({children}: any){
    return(
        <div className="cardroot">
            {children}
        </div>
    )
}