type MyFilterCallback<T> = (element: T, searchValue: T, index: number, array: T[]) => boolean;
function myFilter<T>(arr: T[], searchValue: T, callback: MyFilterCallback<T>): T[] {
  const result: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], searchValue, i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}
const number: number[] = [1, 2, 2, 3, 4, 5, 6];
const result1 = myFilter(number, 2, (element, searchValue) => element === searchValue);
console.log(result1); 
const result2 = myFilter(number, 10, (element, searchValue) => element === searchValue);
console.log(result2); 
