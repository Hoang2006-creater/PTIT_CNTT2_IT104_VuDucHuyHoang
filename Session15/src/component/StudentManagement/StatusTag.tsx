
import { Component } from "react";

type Props = {
  status: "active" | "inactive";
};

export default class StatusTag extends Component<Props> {
  render() {
    const { status } = this.props;
    const style = {
      padding: "4px 10px",
      borderRadius: "8px",
      color: "white",
      background: status === "active" ? "green" : "red",
    };
    return <span style={style}>{status === "active" ? "Đang hoạt động" : "Ngừng hoạt động"}</span>;
  }
}
