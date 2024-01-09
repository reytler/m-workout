'use client'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface propsTitle{
    title: string
}

const inter = Inter({ subsets: ['latin'] })

export function Title(props: propsTitle){
    const pathname = usePathname()
    return(
        <>
            <Link href={'/'} style={{textDecoration:'none'}}>
                <button style={{
                    width:'50px',
                    height:'25px',
                    fontWeight:'bold',
                    margin:'5px 0 0 5px',
                    textAlign:'center',
                    fontSize:'12px',
                    textDecoration:'none',
                    borderRadius:'5px',
                    display: pathname === '/' ? 'none' : 'block'
                }}
                >Voltar</button>
            </Link>
            <h1 
                style={{textAlign:'center', margin:'15px 0 0 0'}} 
                className={inter.className}
            >{props.title}</h1>
        </>
    )
}