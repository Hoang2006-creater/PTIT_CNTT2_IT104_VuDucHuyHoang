import { Component } from "react";

type State = {
  isLoggedIn: boolean;
};

export default class Ex2 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  toggleLogin = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>
          {this.state.isLoggedIn
            ? "Xin chào, User!"
            : "Vui lòng đăng nhập để tiếp tục."}
        </h2>
        <button
          onClick={this.toggleLogin}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            backgroundColor: this.state.isLoggedIn ? "#e53935" : "#43a047",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          {this.state.isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
        </button>
      </div>
    );
  }
}
