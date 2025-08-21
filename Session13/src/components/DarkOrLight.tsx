import  { Component } from 'react'
interface State{
    theme:"light"|"dark"
    language:"english"|"vietnamese"
}
export default class DarkOrLight extends Component <object,State>{
    state:State={
        theme:"light",
        language:"vietnamese"
    }
  render() {
    const {theme,language}=this.state
    const themeText=
    theme ==="light"
    ?language==="english"
    ?"light":"Sang"
    :language ==="english"
    ?"dark":"Toi"
    const langText=language ==="english"?"English":"Tieng viet"
    const containerStyle=
   theme === "light"
        ? {
            backgroundColor: "white",
            color: "black",
            padding: "20px",
            border: "1px solid #ccc",
          }
        : {
            backgroundColor: "black",
            color: "white",
            padding: "20px",
            border: "1px solid #333",
          };
    return (
      <div>
        <div style={{padding:"20px"}}>
            <div style={containerStyle}>
                <p><b>Nen:</b>{themeText}</p>
                 <p><b>Ngon ngu:</b>{langText}</p>
            </div>
        </div>
      </div>
    )
  }
}
