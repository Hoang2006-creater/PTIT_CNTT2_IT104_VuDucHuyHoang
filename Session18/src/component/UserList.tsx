/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
type User={
    id:number;
    name:string;
    age:number;
}
export default function UserList() {
    const users:User[]=[
    { id: 1, name: "Huy", age: 17 },
    { id: 2, name: "Lan", age: 20 },
    { id: 3, name: "Nam", age: 22 },
    { id: 4, name: "Mai", age: 15 },    
    ];
    const filterUsers=useMemo(()=>{
        return users.filter((user)=>user.age>18)
    },[users])
  return (
    <div>
        <h2>Danh sach nguoi dung tren 18 la</h2>
        <ul>
            {filterUsers.map((user)=>(
                <li key ={user.id}>
                    {user.name}-{user.age} tuoi
                </li>
            ))}
        </ul>
    </div>
  )
}
