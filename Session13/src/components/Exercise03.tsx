import { Component } from 'react'
interface User{
    id:number
    name:string;
    age:number;
}

export default class Exercise03 extends Component {
    state={
        users:[
            {id:1,name:"H",age:30},
            {id:1,name:"H",age:30},
            {id:1,name:"H",age:30},
        ] as User[],
    }
  render() {
    return (
      <div>
        <h2>Danh sach Users</h2>
        <table border={1} cellPadding={5} style={{borderCollapse:'collapse'}}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {this.state.users.map((user)=>
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                </tr>
                )}
            </tbody>
        </table>
      </div>
    )
  }
}
