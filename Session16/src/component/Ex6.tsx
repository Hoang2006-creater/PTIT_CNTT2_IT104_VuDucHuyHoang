import { Component } from "react";

type State = {
  isDarkMode: boolean;
};

export default class Ex6 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  toggleTheme = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  };

  render() {
    const { isDarkMode } = this.state;

    const themeStyle: React.CSSProperties = {
      backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
      color: isDarkMode ? "#ffffff" : "#000000",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    };

    return (
      <div style={themeStyle}>
        <h2>{isDarkMode ? "Chế độ Tối đang bật" : "Chế độ Sáng đang bật"}</h2>
        <button style={{background:"#1976d2", padding:"10px",borderRadius:"5px"}} onClick={this.toggleTheme}>
          Chuyển theme
        </button>
      </div>
    );
  }
}
