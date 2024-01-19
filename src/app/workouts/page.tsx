'use client'
import { Title } from "@/components/Title";
import { Workout } from "@/components/Workout/Workout";
import { initialWorkout } from "@/data/workout";
import { Iworkout } from "@/interfaces/Iworkout";
import { useState } from "react";
import { AccordionBody, AccordionHeader, AccordionItem, UncontrolledAccordion } from "reactstrap";

export default function Workouts(){

    const [workouts,] = useState<Array<Iworkout>>(initialWorkout)

    return(
        <>
            <Title title='Treinos'/>
            {workouts.length > 0 && (
                <div 
                    style={{ 
                        width:'100VW', 
                        // display:'flex', 
                        padding:'5px',
                        justifyContent:'center', 
                    }}
                >
                    <UncontrolledAccordion defaultOpen="-1" toggle={()=>{}} >
                        {workouts.map((wk,_idx)=>(
                            <AccordionItem key={wk.id}>
                                <AccordionHeader targetId={`${_idx}`}>
                                    {wk.day}
                                </AccordionHeader>
                                <AccordionBody accordionId={`${_idx}`}>
                                    <Workout key={wk.id} workout={wk}/>
                                </AccordionBody>
                            </AccordionItem>
                        ))}                    
                    </UncontrolledAccordion>
                </div>
            )}
        </>
    )
}