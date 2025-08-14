function parialUpdate<T>(obj:T,updates:Partial<T>):T{
    return {...obj,...updates}
}
console.log(parialUpdate(
    { name: 'Alice', age: 30, job: 'Developer' },
    { age: 31 }
));
