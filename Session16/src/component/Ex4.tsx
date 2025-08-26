import { Component } from "react";

type State = {
  count: number;
};

export default class Ex4 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Số lần click: {this.state.count}</h2>
        <button
          onClick={this.increment}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#1976d2",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}
