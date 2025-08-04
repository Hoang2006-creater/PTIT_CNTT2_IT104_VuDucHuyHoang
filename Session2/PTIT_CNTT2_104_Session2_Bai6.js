function checkEndString(string, input){
    if(string.endsWith(input)){
        return true
    }else{
        return false
    }
}
console.log(checkEndString("Hello,World","World"));