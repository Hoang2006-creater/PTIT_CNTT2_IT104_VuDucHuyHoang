import { Component } from "react";

export default class Pagination extends Component {
  render() {
    return (
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>
    );
  }
}
