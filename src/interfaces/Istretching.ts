import { ISerie } from "./Iworkout"

export interface Istretching {
    title: string
    urlvideo?: string
    urlimg?: string
    type: enumType
    time?: number
    serie?: Array<ISerie>
    qtde?: number
}

export enum enumType {
    isometry,
    serial
}