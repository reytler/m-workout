import { useEffect, useState } from "react"
import { Button } from "../ButtonTimer"
import { Progress } from "reactstrap"

interface propsTimer {
    seconds: number
}

export function Root({seconds}:propsTimer){
    const [remaining,setRemaining] = useState(seconds + 1)
    const [show,setShow] = useState(0)
    const [started,setStarted] = useState(true)
    const [percent,setPercent] = useState(100)
    const [classProgress,setClassProgress] = useState<string>("danger")

    function regresse(value: number){
        setShow(value)
        return value
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            setRemaining(prev=>prev > 0 ? regresse(prev -1) : prev)
        },1000)
        return ()=>clearInterval(interval)
    },[])

    function init(){
        setStarted(true)
        setRemaining(seconds + 1)
    }

    function resume(){
        if(remaining > 0){
            setRemaining(0)
        }else{
            setRemaining(show)
        }
    }

    function reset(){
        setRemaining(seconds + 1)
    }

    useEffect(()=>{
        setPercent((show / seconds) * 100)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[show])

    useEffect(()=>{
        if(percent > 25 && percent < 50){
            setClassProgress("warning")
        }

        if(percent <= 25){
            setClassProgress("success")
        }

        if(percent > 50){
            setClassProgress("danger")
        }
    },[percent])

    return(
        <>
            <div style={{
                display:'flex',
                justifyContent:'center', 
                alignItems:'center',
                height:'250px'
                }}>
                <h1 style={{fontSize:'100px'}}>{show}</h1>
            </div>
            <div style={{margin:'0 0 15px 0'}}>
                <Progress value={percent} color={classProgress}/>
            </div>
            {!started && (
                    <Button onClick={init} color="rgba(0,100,0,0.7)">
                        Iniciar
                    </Button>
            )}
            {started && (
                <Button onClick={reset} color="rgba(219,112,147,0.7)">
                    Reiniciar
                </Button>
            )}
            {started && (
                <Button onClick={resume} color="rgba(255,215,0,0.7)">
                    {remaining > 0 ? 'Pausar' : 'Continuar'}
                </Button>
            )}
        </>
    )
}