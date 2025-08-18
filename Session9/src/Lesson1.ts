function identity<T>(value: T): T {
    return value;
}

// Test
console.log(identity(5));          
console.log(identity("hello"));    
console.log(identity({ a: 1 }));  
