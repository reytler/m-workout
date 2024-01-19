import { ISerie } from "@/interfaces/Iworkout"
interface propsSerie {
    serie: ISerie
}

interface IChildSerie {
    reps: string
    isometry: number
    checked: boolean
}
export function Serie({serie}:propsSerie){
    const series: Array<IChildSerie> = [] as Array<IChildSerie>
    for(var i = serie.amount; i > 0; i--){
        series.push({checked: false,isometry:serie.isometry,reps: serie.reps})
    }
    return(
        <div style={{margin:'0 0 0 5px', display:'flex', alignItems:'baseline', gap:'15px'}}>
            {series.map((se: IChildSerie,_idx)=>(
                <div key={_idx} style={{display:'flex', flexDirection:'row',}}>
                    <input type="checkbox" />
                    <p style={{fontSize:'12px', margin:'0 0 0 5px'}}>{serie.reps} X</p>
                </div>
            ))}
        </div>
    )
}