import { Component, type FormEvent, type ChangeEvent} from 'react'
type State={
    email:string;
    submittedData:{
        email:string
    }|null
}
export default class Ex1 extends Component<object,State>{
    constructor(props:object){
        super(props)
        this.state={
            email: "",
            submittedData:null
        }
    }
    handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        this.setState({email:e.target.value})
    }
    handleSubmit=(e:FormEvent)=>{
        e.preventDefault()
        this.setState({
            submittedData:{email:this.state.email}
        })
          console.log("Submitted Data:", {email:this.state.email});
    }

  render() {
    return (
      <div style={{padding:"20px"}}>
         <h2>Form</h2>
         <form onSubmit={this.handleSubmit}>
            <label>Email</label>
            <input type="email"
            value={this.state.email}
            onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
         </form>
      </div>
    )
  }
}
