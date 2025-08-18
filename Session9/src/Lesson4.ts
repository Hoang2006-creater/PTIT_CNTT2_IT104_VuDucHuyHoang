function withDefault<T = string>(value?: T): T {
    if (value === undefined) {
        return "default" as T;
    }
    return value;
}

// Test
console.log(withDefault());        
console.log(withDefault(42));      
console.log(withDefault(true));   
