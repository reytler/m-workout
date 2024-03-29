import { Iworkout } from "@/interfaces/Iworkout";

export const initialWorkout: Array<Iworkout> = [
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
                title:'Abdução Lateral no cabo + Glúteo no banco Romano',
                rest:60,
                obs:'No romano segurar 2seg no pico',
                series:[
                    {amount: 4, reps: '10 & 12',isometry: 2, checked: false}
                ],
                checked: false,
                url:'https://www.youtube.com/embed/sMMYz6EOeSo'
            },
            {
                id: 3,
                title:'Terra Sumô',
                rest:'60 - 120',
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
                obs:'Apurar execução contrair glúteo no final, repetições lentas. Carga compatível a técnica',
                series:[
                    {amount: 4, reps: '8-10',isometry: 0, checked: false}
                ],
                checked: false,
                url:'https://www.youtube.com/embed/mGUaBiTeYRE'
            },
            {
                id: 5,
                title:'Cadeira Flexora',
                rest:'40 - 120',
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
                obs:'30seg cada Lado',
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
                title:'Desenvolvimento Tradicional + Elevação Frontal Barra',
                rest:60,
                obs:'',
                series:[
                    {amount: 4, reps: '12 & 20', isometry: 0, checked: false}
                ],
                checked: false,
                url:'https://www.youtube.com/embed/tF3dJJnTeeM'
            },
            {
                id: 8,
                title:'Elevação Lateral',
                rest:'30-60',
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
    },
    {
        id: 3,
        day:'Quinta-Feira',
        checked: false,
        exercices:[
            {
                id: 1,
                title:' Pré-ativação - Cadeira extensora',
                rest:60,
                obs:'',
                series:[
                    {amount: 2, reps: '30', isometry: 0, checked: false}
                ],
                checked: false,
                url:''
            },
            {
                id: 2,
                title:' Passadas',
                rest:0,
                obs:'',
                series:[
                    {amount: 1, reps: '150', isometry: 0, checked: false}
                ],
                checked: false,
                url:''
            },
            {
                id: 3,
                title:' Agachamento Livre Barra',
                rest:'40 - 120',
                obs:'Elevar cargas a cada Bloco',
                series:[
                    {amount: 1, reps: '20', isometry: 0, checked: false},
                    {amount: 2, reps: '15', isometry: 0, checked: false},
                    {amount: 4, reps: '10', isometry: 0, checked: false},
                ],
                checked: false,
                url:''
            },
            {
                id: 4,
                title:' Hack descer até 90°',
                rest:60,
                obs:' Na última Série Escolher a carga para Falhar',
                series:[
                    {amount: 4, reps: '8-12', isometry: 0, checked: false},
                ],
                checked: false,
                url:''
            },
            {
                id: 5,
                title:'Cadeira Extensora',
                rest:60,
                obs:' Carga Altíssima',
                series:[
                    {amount: 6, reps: '8', isometry: 0, checked: false},
                ],
                checked: false,
                url:''
            },
            {
                id: 6,
                title:'Cadeira Flexora',
                rest:60,
                obs:'',
                series:[
                    {amount: 3, reps: '30', isometry: 0, checked: false},
                ],
                checked: false,
                url:''
            },
            {
                id: 7,
                title:'Stiff',
                rest:60,
                obs:'',
                series:[
                    {amount: 4, reps: '10', isometry: 0, checked: false},
                ],
                checked: false,
                url:''
            },
        ]
    },
    {
        id: 4,
        day:'Sexta-Feira',
        checked: false,
        exercices:[
            {
               id: 1,
               title:'Manguito Rotador externo',
               rest: 60,
               obs:'',
               series:[
                {amount: 3, reps: '10', isometry: 0, checked: false},
               ],
               checked: false,
               url:'' 
            },
            {
               id: 2,
               title:'Prancha Tradicional',
               rest: 0,
               obs:'',
               series:[
                {amount: 3, reps: '15-30', isometry: 0, checked: false},
               ],
               checked: false,
               url:'' 
            },
            {
               id: 3,
               title:'Ativação Escapular no Espaldar',
               rest: 60,
               obs:'Aperte bem a região. Espaldar = Barra fixa',
               series:[
                {amount: 3, reps: '15', isometry: 0, checked: false},
               ],
               checked: false,
               url:'' 
            },
            {
               id: 4,
               title:'Agachamento terra',
               rest: 30,
               obs:'PARCIAL: Descer até os joelhos',
               series:[
                {amount: 3, reps: '15', isometry: 0, checked: false},
               ],
               checked: false,
               url:'' 
            },
            {
               id: 5,
               title:'Remada Baixa',
               rest: 60,
               obs:'Com barra do Puxador Supinada',
               series:[
                {amount: 4, reps: '10', isometry: 0, checked: false},
               ],
               checked: false,
               url:'' 
            },
            {
               id: 6,
               title:'Remada Serrote Unilateral',
               rest: 0,
               obs:'Sem descanso',
               series:[
                {amount: 5, reps: '10', isometry: 0, checked: false},
               ],
               checked: false,
               url:'' 
            },
            {
               id: 7,
               title:'Puxada Alta Frente Aberta + Puxada Frente Fechada Supinada',
               rest: 60,
               obs:'',
               series:[
                {amount: 4, reps: '12 & 16', isometry: 0, checked: false},
               ],
               checked: false,
               url:'' 
            },
            {
               id: 8,
               title:'Panturrilha no Banco sóleo',
               rest: 60,
               obs:'2 seg no Pico de contração',
               series:[
                {amount: 6, reps: '12', isometry: 2, checked: false},
               ],
               checked: false,
               url:'' 
            },
        ]
    }
]