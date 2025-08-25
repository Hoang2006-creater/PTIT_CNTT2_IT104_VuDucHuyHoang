import { Component,type ChangeEvent,type FormEvent } from 'react'
type State={
    progress:number
    submittedProgress:number|null
}
export default class Ex4 extends Component<object,State> {
    constructor(props:object){
        super(props)
        this.state={
            progress:0,
            submittedProgress:null,
        }
    }
    handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        this.setState({progress:Number(e.target.value)})
    }
    handleSubmit=(e:FormEvent)=>{
        e.preventDefault()
        this.setState({submittedProgress:this.state.progress})

    }
  render() {
    return (
      <div style={{padding:"20px"}}>
        <h2>
            Tien do hoan thanh:{" "}
            {this.state.submittedProgress!==null
            ?this.state.submittedProgress +"%":"%"}</h2>
            <form onSubmit={this.handleSubmit}>
                <input type="range"
                min="0"
                max="100"
                value={this.state.progress}
                onChange={this.handleChange}
                />
                <br />
                <button type="submit">Submit</button>
                </form>
                </div>
    )
  }
}
