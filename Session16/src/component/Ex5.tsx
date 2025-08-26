import { Component, type ChangeEvent, type FormEvent } from "react";

type State = {
  name: string;
  email: string;
  age: number | "";
  error: string;
  submitted: boolean;
};

export default class Ex5 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: "",
      error: "",
      submitted: false,
    };
  }
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      [name]: name === "age" && value !== "" ? Number(value) : value,
    } as unknown as Pick<State, keyof State>);
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const {email, age } = this.state;

    if (!email.includes("@")) {
      this.setState({ error: "Email không hợp lệ", submitted: false });
      return;
    }
    if (typeof age === "number" && age < 0) {
      this.setState({ error: "Tuổi không được âm", submitted: false });
      return;
    }
    this.setState({ error: "", submitted: true });
  };

  handleReset = () => {
    this.setState({
      name: "",
      email: "",
      age: "",
      error: "",
      submitted: false,
    });
  };

  render() {
    const { name, email, age, error, submitted } = this.state;

    return (
      <div style={{ maxWidth: "400px", margin: "40px auto", textAlign: "center" }}>
        <h2>User Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div style={{ margin: "10px 0" }}>
            <input
              type="text"
              name="name"
              placeholder="Nhập tên"
              value={name}
              onChange={this.handleChange}
              style={{ padding: "8px", width: "100%" }}
            />
          </div>
          <div style={{ margin: "10px 0" }}>
            <input
              type="email"
              name="email"
              placeholder="Nhập email"
              value={email}
              onChange={this.handleChange}
              style={{ padding: "8px", width: "100%" }}
            />
          </div>
          <div style={{ margin: "10px 0" }}>
            <input
              type="number"
              name="age"
              placeholder="Nhập tuổi"
              value={age}
              onChange={this.handleChange}
              style={{ padding: "8px", width: "100%" }}
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              marginRight: "10px",
              backgroundColor: "#1976d2",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Gửi
          </button>
          <button
            type="button"
            onClick={this.handleReset}
            style={{
              padding: "10px 20px",
              backgroundColor: "#e53935",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Xóa tất cả
          </button>
        </form>
        {submitted && !error && (
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              textAlign: "left",
            }}
          >
            <h3>Thông tin người dùng:</h3>
            <p><b>Tên:</b> {name}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Tuổi:</b> {age}</p>
          </div>
        )}
      </div>
    );
  }
}
