function formatDate(string){
    const date=new Date(string);
    let day=date.getDate()
    let month=date.getMonth()+1
    const year=date.getFullYear();
    if(day<=10){
        day="0"+day
    }
    if(month<=10){
        month="0"+month
    }
    return `${day},${month},${year}`
}
export{formatDate}