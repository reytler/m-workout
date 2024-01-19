import { Istretching, enumType } from "@/interfaces/Istretching";
import { Card } from "../Card";
import { Serie } from "../Serie";
import { ISerie } from "@/interfaces/Iworkout";
import { useState } from "react";
import { Video } from "../Video";
import Image from 'next/image'
import { Timer } from "../Timer";

interface propsStretching{
    stretching: Istretching
}

export function Stretching({stretching}:propsStretching){
    const [isOpenModalTimer,setisOpenModalTimer] = useState(false)
    const [isOpenModalIntermediary,setisOpenModalIntermediary] = useState(false)
    const [timeTimer,setTimetimer] = useState<number>(stretching.time!)

    function toogleModalTimer(){
        setisOpenModalTimer(prev=>!prev)
    }

    function toogleModalIntermediary(value: boolean){
        setisOpenModalIntermediary(prev=>!prev)
        if(value){
            setTimetimer(stretching.time! * stretching.qtde!)
        }else{
            setTimetimer(stretching.time!)
        }
        if(isOpenModalIntermediary){
            toogleModalTimer()
        }
    }

    return(
        <Card.Root>
            <Card.Body>
                {stretching.type === enumType.serial && (
                    <>
                        
                        <Video 
                            link={`${stretching.urlvideo}`} 
                            title=""
                            isEmbend
                        />
                    </>
                )}
                {stretching.type === enumType.serial && stretching.serie?.map((sr: ISerie,_idx:any)=>(
                    <Serie serie={sr} key={_idx}/>
                ))}
                {stretching.type === enumType.isometry && (<Card.Title text={`Repetir ${stretching.qtde} X`}/>)}
                {stretching.type === enumType.isometry && (
                    <Image 
                        src={`${stretching.urlimg}`} 
                        alt="IMAGEM" 
                        width={226} 
                        height={256}
                    />
                )}
                {stretching.type === enumType.isometry && (
                    <>
                        <Timer.Modal isOpen={isOpenModalIntermediary} toggle={()=>setisOpenModalIntermediary(prev=>!prev)} centered>
                            <Timer.ModalBody>
                                <div style={{display:'flex', flexDirection:'column'}}>
                                    <Timer.Button 
                                        onClick={()=>toogleModalIntermediary(false)} 
                                        color="rgba(0,100,0,0.5)"
                                    >Tempo Fracionado: {stretching.time!}</Timer.Button>
                                    <Timer.Button 
                                        onClick={()=>toogleModalIntermediary(true)} 
                                        color="rgba(219,112,147,0.7)"
                                    >Tudo de uma vez: {stretching.time! * stretching.qtde!}</Timer.Button>
                                </div>
                            </Timer.ModalBody>
                        </Timer.Modal>
                        <Timer.Modal isOpen={isOpenModalTimer} toggle={toogleModalTimer} centered>
                            <Timer.ModalBody>
                                <Timer.Root seconds={timeTimer}/>
                            </Timer.ModalBody>
                        </Timer.Modal>
                        <Timer.Button onClick={()=>toogleModalIntermediary(false)} color="rgba(0,100,0,0.5)">Abrir timer</Timer.Button>
                    </>
                )}                
            </Card.Body>
        </Card.Root>
    )
}