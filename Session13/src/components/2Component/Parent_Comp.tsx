import { Component } from "react";
import Children_Comp from "./Children_Comp";

interface State {
  name: string;
}

export default class Parent_Comp extends Component<object, State> {
  state: State = {
    name: "Nguyễn Văn Nam",
  };

  render() {
    return (
      <div>
        <h2>Họ và tên bên component cha: {this.state.name}</h2>
        <Children_Comp name={this.state.name} />
      </div>
    );
  }
}
