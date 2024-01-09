import { Iexercice } from "@/app/workouts/page"
import { Serie } from "../Serie"
import { Modal, ModalBody } from "reactstrap"
import { useState } from "react"

interface propsExercice{
    exercice: Iexercice
}

function Video({link,title, isOpen, toogle}:{link: string,title: string, isOpen: boolean, toogle: ()=>void}){
    return(
        <Modal isOpen={isOpen} toggle={toogle}>
            <ModalBody>
                {/*@ts-ignore*/}
            <iframe width="319" height="567" src={link} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </ModalBody>
        </Modal>
    )
}

export function Exercice({exercice}:propsExercice){
    const [isOpenModalVideo,setisOpenModalVideo] = useState(false)
    function toogleModalVideo(){
        setisOpenModalVideo(prev=>!prev)
    }
    return(
        <div 
            style={{
                margin:'15px 0 0 0',
                border:'1px solid rgba(0,0,0,1)',
                borderRadius:'5px',
                padding: '0 0 15px 0'
            }}
            id="exercice"
        >
            <div style={{
                    margin:'0 0 0 15px', 
                    display:'flex', 
                    alignItems:'baseline', 
                    justifyContent:'center',
                    fontWeight:'400',
                    color:'rgba(79,79,79,1)',
                    flexDirection:'column',
                    //@ts-ignore
                    alignItems:'center'
                }} id="">
                {/* <input type="checkbox" /> */}
                <p style={{fontSize:'18px', margin:'0 0 0 5px'}}>{exercice.title}</p>
                <span style={{fontSize:'10px', fontWeight:'bold'}}>Descanso: {exercice.rest}</span>
                <span style={{
                    padding:'8px',
                    fontSize:'12px',
                    color:'rgba(60,179,113,0.8)'
                }}>Obs.: {exercice.obs}</span>
            </div>
            <div style={{margin:'15px 0 0 30px', display:'flex', flexDirection:'column', gap:'15px'}}>
                {exercice.series.map((serie,_idx)=>(
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
        </div>
    )
}