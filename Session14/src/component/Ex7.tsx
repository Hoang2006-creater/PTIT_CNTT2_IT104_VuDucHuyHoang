import { Component, type ChangeEvent, type FormEvent, createRef } from "react";

type User = {
  name: string;
  email: string;
  password: string;
  address: string;
};

type State = {
  name: string;
  email: string;
  password: string;
  address: string;
  message: string;
};

export default class RegisterForm extends Component<object, State> {
  nameInputRef = createRef<HTMLInputElement>();

  constructor(props: object) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      address: "",
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
    const { name, email, password, address } = this.state;
    if (!name || !email || !password) {
      this.setState({
        message: "Tên sinh viên, Email và Mật khẩu không được để trống",
      });
      return;
    }
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const exist = users.find((u: User) => u.email === email);
    if (exist) {
      this.setState({ message: "Email đã tồn tại!" });
      return;
    }
    const newUser: User = { name, email, password, address };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    this.setState({
      name: "",
      email: "",
      password: "",
      address: "",
      message: "Đăng ký tài khoản thành công",
    });
    if (this.nameInputRef.current) {
      this.nameInputRef.current.focus();
    }
  };

  render() {
    return (
      <div style={{ maxWidth: "400px", margin: "20px auto" }}>
        <h2>Đăng ký tài khoản</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Tên sinh viên:</label>
            <input
              ref={this.nameInputRef}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
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
          <div>
            <label>Địa chỉ:</label>
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Đăng ký</button>
        </form>
        {this.state.message && (
          <p style={{ marginTop: "10px", color: "green" }}>
            {this.state.message}
          </p>
        )}
      </div>
    );
  }
}
