import { Component } from "react";
import "./Ex3.css";

export default class ButtonList extends Component {
  render() {
    return (
      <div className="btn-box">
        <button className="btn blue">Primary</button>
        <button className="btn gray">Secondary</button>
        <button className="btn green">Success</button>
        <button className="btn yellow">Warning</button>
        <button className="btn red">Danger</button>
        <button className="btn cyan">Info</button>
        <button className="btn white">Light</button>
        <button className="btn black">Dark</button>
        <button className="btn link">Link</button>
      </div>
    );
  }
}