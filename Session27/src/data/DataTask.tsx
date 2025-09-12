export interface DataTask{
    id:number
    title:string
    description:string
}
export const tasks :DataTask[]=[
    {
        id:1,
        title:"Hoc React Router",
        description:"Lam quen voi Dynamic Routes va useNavigate"
    },
    {
        id:2,
        title:"On lai tailwind",
        description:"Thuc hanh tao UI co ban bang tailwind CSS"
    },
    {
        id:3,
        title:"Hoan thanh BTVN",
        description:"Day code len Github va nop link"
    }
]