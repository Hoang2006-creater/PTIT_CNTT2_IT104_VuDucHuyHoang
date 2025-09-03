import React, { useReducer } from 'react'

type State = {
  name: string
  email: string
}
type Action =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload }
    case 'SET_EMAIL':
      return { ...state, email: action.payload }
    default:
      return state
  }
}

export default function UserForm() {
  const [state, dispatch] = useReducer(reducer, { name: '', email: '' })

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Form</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
        <input
          type="text"
          placeholder="Nhập tên..."
          value={state.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: 'SET_NAME', payload: e.target.value })
          }
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <input
          type="email"
          placeholder="Nhập email..."
          value={state.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: 'SET_EMAIL', payload: e.target.value })
          }
          style={{ padding: "8px", fontSize: "16px" }}
        />
      </form>

      <div style={{ marginTop: "20px" }}>
        <h3>Thông tin người dùng:</h3>
        <p><b>Tên:</b> {state.name}</p>
        <p><b>Email:</b> {state.email}</p>
      </div>
    </div>
  )
}
