function createUser(name,age=20,role="user"){
    return{
        name,
        age,
        role
    }
}
console.log(createUser("Nguyen Van A"));
