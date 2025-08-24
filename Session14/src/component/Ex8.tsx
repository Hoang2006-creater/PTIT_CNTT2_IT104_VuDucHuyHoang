import { Component, type ChangeEvent, type FormEvent } from "react";

type User = {
  name: string;
  email: string;
  password: string;
  address: string;
};

type State = {
  email: string;
  password: string;
  message: string;
};

export default class Es8 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    } as Pick<State, keyof State>);
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ message: "Email và Mật khẩu không được để trống" });
      return;
    }
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const exist = users.find(
      (u: User) => u.email === email && u.password === password
    );

    if (exist) {
      this.setState({ message: "Đăng nhập thành công" });
    } else {
      this.setState({ message: "Đăng nhập thất bại" });
    }
  };

  render() {
    return (
      <div style={{ maxWidth: "400px", margin: "20px auto" }}>
        <h2>Đăng nhập</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Mật khẩu:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Đăng nhập</button>
        </form>
        {this.state.message && (
          <p style={{ marginTop: "10px", color: "blue" }}>{this.state.message}</p>
        )}
      </div>
    );
  }
}
