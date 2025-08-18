function createObject<K extends string, V>(keys: K[], values: V[]): Record<K, V> {
  const result = {} as Record<K, V>;

  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i];
  }

  return result;
}

// --- Test ---
const keys = ['name', 'age', 'email'] ; 
const values = ['Alice', 25, 'alice@example.com'];

const obj = createObject(keys, values);
console.log(obj);

