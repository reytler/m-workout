import { Serie } from "../Serie"
import { useState } from "react"
import { Card } from "../Card"
import { Video } from "../Video"
import { Obs } from "../Obs"
import { ISerie, Iexercice } from "@/interfaces/Iworkout"

interface propsExercice{
    exercice: Iexercice
}

export function Exercice({exercice}:propsExercice){
    const [isOpenModalVideo,setisOpenModalVideo] = useState(false)
    function toogleModalVideo(){
        setisOpenModalVideo(prev=>!prev)
    }
    return(
        <Card.Root>
            <Card.Body>
                <Card.Title text={exercice.title}/>
                <span style={{fontSize:'10px', fontWeight:'bold'}}>Descanso: {exercice.rest}</span>
                <Obs text={exercice.obs}/>
            </Card.Body>
            <div style={{margin:'15px 0 0 30px', display:'flex', flexDirection:'column', gap:'15px'}}>
                {exercice.series.map((serie:ISerie,_idx:any)=>(
                    <Serie serie={serie} key={_idx}/>
                ))}
            </div>
            <div style={{
                display: exercice.url ? 'flex' :'none', 
                justifyContent:'center', 
                margin:'15px 0 0 0'
                }} >
                <button 
                    style={{
                        borderRadius:'5px'
                    }}
                    onClick={()=>toogleModalVideo()}
                >
                    Vídeo
                </button>
            </div>
            <Video link={`${exercice.url}`} title={exercice.title} isOpen={isOpenModalVideo} toogle={toogleModalVideo}/>
        </Card.Root>
    )
}