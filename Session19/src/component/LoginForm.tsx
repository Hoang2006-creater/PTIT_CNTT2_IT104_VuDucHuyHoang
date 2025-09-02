import  { useReducer, useState } from "react";
const initialState = {
  loading: false,
  success: false,
  error: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN_START":
      return { loading: true, success: false, error: false };
    case "LOGIN_SUCCESS":
      return { loading: false, success: true, error: false };
    case "LOGIN_ERROR":
      return { loading: false, success: false, error: true };
    default:
      return state;
  }
}

function LoginForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch({ type: "LOGIN_START" });


    setTimeout(() => {
      if (username === "admin" && password === "123") {
        dispatch({ type: "LOGIN_SUCCESS" });
      } else {
        dispatch({ type: "LOGIN_ERROR" });
      }
    }, 2000);
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <div>
        <label>Tên người dùng:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label>Mật khẩu:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={handleLogin}>Đăng nhập</button>

      <div>
        {state.loading && <p>Đang đăng nhập...</p>}
        {state.success && <p>Đăng nhập thành công!</p>}
        {state.error && <p> Sai tài khoản hoặc mật khẩu!</p>}
      </div>
    </div>
  );
}

export default LoginForm;