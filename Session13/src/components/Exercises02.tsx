import { Component } from "react";

interface StateType {
  id: number;
  fullName: string;
  birthday: string;
  address: string;
}

export default class Exercise02 extends Component<object,StateType> {
  state: StateType = {
    id: 1,
    fullName: "Nguyễn Văn Sơn",
    birthday: "20/12/2023",
    address: "Thanh Xuân, Hà Nội"
  };

  render() {
    return (
      <div>
        <h2>Thông tin cá nhân</h2>
        <p><b>id:</b> {this.state.id}</p>
        <p><b>Tên:</b> {this.state.fullName}</p>
        <p><b>Ngày sinh:</b> {this.state.birthday}</p>
        <p><b>Địa chỉ:</b> {this.state.address}</p>
      </div>
    );
  }
}
