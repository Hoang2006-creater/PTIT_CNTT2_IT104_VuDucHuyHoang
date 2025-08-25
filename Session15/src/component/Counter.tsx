import { Component } from "react";

type State = {
  count: number;
};

export default class Counter extends Component<object, State> {
    private timerId: ReturnType<typeof setInterval> | undefined;
  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({
        count: (prevState.count + 1) % 11, 
      }));
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Count: {this.state.count}</h2>
      </div>
    );
  }
}
 