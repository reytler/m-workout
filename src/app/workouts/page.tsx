'use client'
import { Title } from "@/components/Title";
import { Workout } from "@/components/Workout/Workout";
import { useState } from "react";
import { AccordionBody, AccordionHeader, AccordionItem, UncontrolledAccordion } from "reactstrap";

export interface Iworkout {
    id: number
    day: string,
    exercices: Array<Iexercice>
    checked: false
}

export interface Iexercice {
    id: number
    title: string
    rest: number
    series: Array<ISerie>
    checked: boolean
    obs: string
    url?: string
}

export interface ISerie {
    amount: number
    reps: string
    isometry: number
    checked: boolean
}

const initialWorkout: Array<Iworkout> = [
    {
        id: 1,
        day:'Segunda-Feira',
        checked: false,
        exercices: [
            {
                id: 1,
                title:'Pré Ativação - Abdução Lateral na Polia',
                rest:0,
                obs:'',
                series:[
                    {amount: 2, reps: '30', isometry: 0, checked: false}
                ],
                checked: false,
                url:'https://www.youtube.com/embed/sMMYz6EOeSo'
            },
            {
                id: 2,
                title:'Abdução Lateral no cabo',
                rest:60,
                obs:'',
                series:[
                    {amount: 4, reps: '12',isometry: 2, checked: false}
                ],
                checked: false,
                url:'https://www.youtube.com/embed/sMMYz6EOeSo'
            },
            {
                id: 3,
                title:'Terra Sumô',
                rest:60,
                obs:'Aqui progredir cargas em toda nova série',
                series:[
                    {amount: 4, reps: '8-12',isometry: 0, checked: false}
                ],
                checked: false,
                url:'https://www.youtube.com/embed/A2GnkUYgct0'
            },
            {
                id: 4,
                title:'Stiff',
                rest:60,
                obs:'Apurar execução contrair glúteo no final, repetições lentas.',
                series:[
                    {amount: 4, reps: '8-10',isometry: 0, checked: false}
                ],
                checked: false,
                url:'https://www.youtube.com/embed/mGUaBiTeYRE'
            },
            {
                id: 5,
                title:'Cadeira Flexora',
                rest:60,
                obs:'Elevar carga a cada novo Bloco',
                series:[
                    {amount: 2, reps: '15',isometry: 0, checked: false},
                    {amount: 2, reps: '12',isometry: 0, checked: false},
                    {amount: 3, reps: '8',isometry: 0, checked: false},
                ],
                checked: false,
                url:'https://www.youtube.com/embed/MqhoP1kWMA8',
            },
            {
                id: 6,
                title:'Panturrilha no Banco sóleo',
                rest:60,
                obs:'2 seg de Pico de contração',
                series:[
                    {amount: 6, reps: '12',isometry: 2, checked: false},
                ],
                checked: false,
                url:'https://www.youtube.com/embed/azXA1K5WXgE'
            },
            
        ]
    },
    {
        id: 2,
        day:'Terça-Feira',
        checked: false,
        exercices: [
            {
                id: 1,
                title:'Manguito Rotador externo',
                rest: 60,
                obs:'',
                series:[
                    {amount: 3, reps: '15', isometry: 0, checked: false}
                ],
                checked: false,
                url:'https://www.youtube.com/embed/aqnxwHJUHoU'
            },
            {
                id: 2,
                title:'Prancha Lateral',
                rest: 60,
                obs:'15 a 30seg cada Lado',
                series:[
                    {amount: 3, reps: '15-30', isometry: 30, checked: false}
                ],
                checked: false,
                url:'https://www.youtube.com/embed/x2gzR9zzSCw'
            },
            {
                id: 3,
                title:'Abdominal Remador',
                rest: 60,
                obs:'',
                series:[
                    {amount: 3, reps: '15-20', isometry: 0, checked: false}
                ],
                checked: false,
                url:'https://www.youtube.com/embed/tM9PS1_ic2M'
            },
            {
                id: 4,
                title:'Elevação Lateral',
                rest: 60,
                obs:'Carga leve',
                series:[
                    {amount: 1, reps: '50', isometry: 0, checked: false}
                ],
                checked: false,
                url:'https://www.youtube.com/embed/ot9nwSC1JnA'
            },
            {
                id: 5,
                title:'Desenvolvimento Fechado',
                rest:60,
                obs:'C/ barra, Pegada Inversa cotovelos fechados',
                series:[
                    {amount: 3, reps: '20', isometry: 0, checked: false}
                ],
                checked: false,
                url:'https://www.youtube.com/embed/9gZWJRbQXAs'
            },
            {
                id: 6,
                title:'Desenvolvimento Tradicional',
                rest:60,
                obs:'ATENÇÃO: Combinado com o debaixo',
                series:[
                    {amount: 4, reps: '12', isometry: 0, checked: false}
                ],
                checked: false,
                url:'https://www.youtube.com/embed/tF3dJJnTeeM'
            },
            {
                id: 7,
                title:' Elevação Frontal Barra',
                rest:60,
                obs:'ATENÇÃO: Combinado com o de cima',
                series:[
                    {amount: 4, reps: '20', isometry: 0, checked: false}
                ],
                checked: false,
                url:'https://www.youtube.com/embed/hHOadM76mBU'
            },
            {
                id: 8,
                title:'Elevação Lateral',
                rest:60,
                obs:'Elevar carga a cada bloco',
                series:[
                    {amount: 2, reps: '20', isometry: 0, checked: false},
                    {amount: 2, reps: '15', isometry: 0, checked: false},
                    {amount: 3, reps: '10', isometry: 0, checked: false},
                    {amount: 1, reps: '6', isometry: 0, checked: false},
                ],
                checked: false,
                url:'https://www.youtube.com/embed/ot9nwSC1JnA'
            },
            {
                id: 9,
                title:' Crucifixo Inverso',
                rest:60,
                obs:'',
                series:[
                    {amount: 4, reps: '20', isometry: 0, checked: false}
                ],
                checked: false,
                url:'https://www.youtube.com/embed/aLFb7WS2Dfs'
            },
            {
                id: 10,
                title:' Remada Baixa c/ Corda',
                rest:60,
                obs:'Direcionar a remada aos Romboides, elevar os cotovelos em direção ao ombro e puxar a corda acima do peito quaso no queixo e com abertura máxima',
                series:[
                    {amount: 3, reps: '12', isometry: 0, checked: false}
                ],
                checked: false,
                url:'https://www.youtube.com/embed/7lc8Ow4vIwA'
            },
        ]
    }
]

export default function Workouts(){

    const [workouts,setWorkouts] = useState<Array<Iworkout>>(initialWorkout)

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