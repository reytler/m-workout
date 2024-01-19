import { Button } from '@/components/Button'
import { Title } from '@/components/Title'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Title title='M-workout'/>
      <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'30px',
        margin:'50px 0 0 0'
      }}>
        <Link href={'/workouts'}>          
          <Button height={45} width={300} fontSize={30} value={'Treinos'}/>
        </Link>
        <Link href={'/diet'}>
          <Button height={45} width={300} fontSize={30} value={'Dieta'}/>
        </Link>
        <Link href={'/stretching'}>
          <Button height={45} width={300} fontSize={30} value={'Alongamentos'}/>
        </Link>
      </div>
    </>
  )
}
