import { Component } from "react";

type State = {
  time: Date;
};

export default class Clock extends Component<object, State> {
    private timerId: ReturnType<typeof setInterval> | undefined;


  constructor(props: object) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { time } = this.state;
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");

    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>
          Thời gian hiện tại: {hours} : {minutes} : {seconds}
        </h2>
      </div>
    );
  }
}
