'use client'
import { Stretching } from "@/components/Stretching";
import { Title } from "@/components/Title";
import { initialStretching } from "@/data/stretching";
import { useState } from "react";
import { AccordionBody, AccordionHeader, AccordionItem, UncontrolledAccordion } from "reactstrap";



export default function PageStretching(){

    const [tretching,] = useState(initialStretching)

    return(
        <>
            <Title title='Alongamentos'/>
            <UncontrolledAccordion defaultOpen="-1" toggle={()=>{}} style={{margin:'5px'}}>
                {initialStretching.map((st,_idx)=>(
                    <AccordionItem key={_idx}>
                        <AccordionHeader targetId={`${_idx}`}>
                                    {st.title}
                        </AccordionHeader>
                        <AccordionBody accordionId={`${_idx}`}>
                            <Stretching stretching={st}/>
                        </AccordionBody>
                    </AccordionItem>
                ))}
            </UncontrolledAccordion>
        </>
    )
}