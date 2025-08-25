import { Component,type ChangeEvent,type FormEvent} from 'react'
type State={
    color:string;
    submittedColor:string
}
export default class Ex2 extends Component<object,State>{
    constructor(props:object){
        super(props)
        this.state={
            color:"#000000",
            submittedColor:""
        }
    }
    handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        this.setState({color:e.target.value})
    }
    handleSubmit=(e:FormEvent)=>{
        e.preventDefault()
        this.setState({submittedColor:this.state.color})
    }
  render() {
    return (
      <div style={{padding:"20px"}}>
        <h2>Color: {this.state.submittedColor?this.state.submittedColor:""}
        </h2>
        <form onSubmit={this.handleSubmit}>
            <label>Mau sac</label>
            <input 
            type='color'
            value={this.state.color}
            onChange={this.handleChange}/>
            <button type="submit">Submit</button>
        </form>
        {this.state.submittedColor&&(
            <div
            style={{
                marginTop:"20px",
                width:"100px",
                height:"50px",
                backgroundColor:this.state.submittedColor,
                border:"1px solid #000"
            }}>
            </div>
        )}
            </div>
    )
  }
}
