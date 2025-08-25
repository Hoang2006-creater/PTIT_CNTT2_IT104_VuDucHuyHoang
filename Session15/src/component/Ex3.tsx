import  { Component,type ChangeEvent,type FormEvent } from 'react'
type State={
    birthday:string;
    submittedBirthday:string;
}
export default class Ex3 extends Component<object,State>{
    constructor(props:object){
        super(props)
        this.state={
            birthday:"",
            submittedBirthday:""
        }
    }
    handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        this.setState({birthday:e.target.value})
    }
    handleSubmit=(e:FormEvent)=>{
        e.preventDefault()
        this.setState({submittedBirthday:this.state.birthday})
    }
  render() {
    return (
      <div style={{padding:"20px"}}>
        {this.state.submittedBirthday&&(
            <h2>Ngay sinh:{this.state.submittedBirthday}</h2>
        )}
        <form onSubmit={this.handleSubmit}>
            <label>Ngay sinh:</label>
            <input type="date"
            value={this.state.birthday}
            onChange={this.handleChange}
             />
             <button type="submit">Submit</button>
            </form>
            </div>
    )
  }
}
