import React, { Component } from "react";
type Props={
    color:string
}
export default class extends Component<Props>{
    render() {
        const {color}=this.props
        return(
            <div
            style={{
                width:"200px",
                height:"200px",
                background:color,
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color:"white",
                margin:"10px",
            }}>
                Box
            </div>
        )
    }
}