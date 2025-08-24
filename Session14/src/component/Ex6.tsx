import { Component, type ChangeEvent, type FormEvent } from "react";

type State = {
  gender: string;
  submitted: string;
};

export default class Ex6 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      gender: "",
      submitted: ""
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      gender: e.target.value
    });
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.setState({
      submitted: this.state.gender
    });
  };

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <form onSubmit={this.handleSubmit}>
          <h3>Giới tính:</h3>

          <label>
            <input
              type="radio"
              name="gender"
              value="Nam"
              checked={this.state.gender === "Nam"}
              onChange={this.handleChange}
            />
            Nam
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Nữ"
              checked={this.state.gender === "Nữ"}
              onChange={this.handleChange}
            />
            Nữ
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Khác"
              checked={this.state.gender === "Khác"}
              onChange={this.handleChange}
            />
            Khác
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>

        {this.state.submitted && (
          <div style={{ marginTop: "20px" }}>
            <h4>Giới tính: {this.state.submitted}</h4>
          </div>
        )}
      </div>
    );
  }
}
