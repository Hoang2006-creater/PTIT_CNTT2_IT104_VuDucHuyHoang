import { Component } from "react";

class UserInfo extends Component{
    user={
        fullName:"Nguyen Van A",
        gender:"Nam",
        birthDay:"06/03/2024",
        email:"nva@gmail.com",
        address:"Thanh xuan,Ha Noi",
    }
    render(){
        return(
            <div>
                <h2>Thong tin ca nhan</h2>
                <ul>
                    <li>
                        Ho va ten:<b>{this.user.fullName}</b>
                    </li>
                      <li>
                        Gioi tinh:<b>{this.user.gender}</b>
                    </li>
                      <li>
                       Ngay sinh:<b>{this.user.birthDay}</b>
                    </li>
                      <li>
                        Email:<b>{this.user.email}</b>
                    </li>
                      <li>
                        Dia chi:<b>{this.user.address}</b>
                    </li>
                </ul>
            </div>
        )
    }
}
export default UserInfo