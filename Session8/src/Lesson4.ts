function mergeObjects<T,U>(obj1:T,obj2:U):T&U{
    return {...obj1,...obj2}
}
const person={name:"Hoang",age:20}
const job ={title:"Developer",salary:2000}
const merged=mergeObjects(person,job)
console.log(merged);
