function Calculation(){
    const a:number=10
    const b:number=10
    //Cac ham tinh toan
    const add=(x:number,y:number):number=>x+y
    const substract=(x:number,y:number):number=>x-y
    const multiply=(x:number,y:number):number=>x*y
    const divide=(x:number,y:number):number=>x/y

    return(
        <div>
            <h2>Danh sach ket qua</h2>
            <ul>
                <li>{a}+{b}={add(a,b)}</li>
                <li>{a}-{b}={substract(a,b)}</li>
                <li>{a}*{b}={multiply(a,b)}</li>
                <li>{a}/{b}={divide(a,b)}</li>
            </ul>
        </div>
    )
}
export default Calculation