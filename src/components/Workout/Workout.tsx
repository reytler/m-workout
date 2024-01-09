import { Iworkout } from "@/app/workouts/page";
import Swicth from "../Switch";
import { Exercice } from "../Exercice";

interface propsWorkout{
    workout: Iworkout
}

export function Workout(props: propsWorkout){

    const {workout} = props

    return(
        <>
            {/* <div style={{
                display: 'flex',
                gap:'5px'
            }}>
                <span>Pendente </span>
                <Swicth checked={workout.checked}/>
                <span>Concluído </span>
            </div> */}
            <h4 style={{
                margin:'15px 0 0 0',
                textAlign:'center'
            }}>
                Exercícios:
            </h4>
            {workout.exercices.map(ex=>(                
                <Exercice key={ex.id} exercice={ex}/>
            ))}
        </>
    )
}