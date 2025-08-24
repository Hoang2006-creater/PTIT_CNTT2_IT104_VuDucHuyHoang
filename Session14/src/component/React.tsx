import{ Component } from 'react'
    type State={
    slogan:string;
}

export default class React extends Component<object,State>{
    constructor(props:object){
        super(props)
    this.state={
        slogan:"Hoc code de di lam"
    }
    }
    changeMessage=()=>{
        this.setState({
            slogan:"Hoc code se thanh cong!Co len"
        })
    }
    shouldComponentUpdate() {
        return false
    }
  render() {
    return (
      <div>
        <h2>Slogan:{this.state.slogan}</h2>
        <button onClick={this.changeMessage}>Change Message</button>
      </div>
    )
  }
}
