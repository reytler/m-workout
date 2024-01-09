import { useState } from 'react';

export default function Swicth({checked}:{checked:boolean}){
    const [right, setRight] = useState(checked);
    
    const toogle = ()=>{
        setRight(prev=>!prev);
    };

    return(
        <span 
            style={{
                cursor: 'pointer',
                width: '50px',
                backgroundColor: right ? '#eef2fa' : '#282c34',
                padding: '0px 0px 0px 0px',
                borderRadius: '50px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: right ? 'right' : 'left',
                transition: 'all .5s ease-in'
            }} 
            onClick={()=>toogle()}
        >
            <span style={{
                    width: '25px',
                    height: '25px',
                    borderRadius: '25px',
                    backgroundColor: `${right ? '#282c34':'#eef2fa'}`
            }}/>
        </span>
    )
}