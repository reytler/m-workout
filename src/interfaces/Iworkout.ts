export interface Iworkout {
    id: number
    day: string,
    exercices: Array<Iexercice>
    checked: false
}

export interface Iexercice {
    id: number
    title: string
    rest: number | string
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