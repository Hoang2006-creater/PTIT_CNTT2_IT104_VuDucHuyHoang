import { Component } from 'react'
type State={
    company:string
}
export default class Ex3 extends Component<object,State> {
    constructor(props:object){
        super(props)
        this.state={
            company:"Rikkei"
        }
    }
    changeCompany=()=>{
        this.setState({
            company:"LMS"
        })
    }
  render() {
    return (
      <div>
        <h2>Company:{this.state.company}</h2>
        <button onClick={this.changeCompany}>Change State</button>
        </div>
    )
  }
}
