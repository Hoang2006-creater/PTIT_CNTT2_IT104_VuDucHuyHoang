type User={
    firstName:string;
    lastName:string;
}
function formatName(user:User):string{
    return`${user.firstName} ${user.lastName}`
}
export default function FormatName(){
    const user:User={
        firstName:"Nguyen Van",
        lastName:"Nam"
    }
    return (
        <div>
            <h2> Ho va Ten:{formatName(user)}</h2>
        </div>
    )
}