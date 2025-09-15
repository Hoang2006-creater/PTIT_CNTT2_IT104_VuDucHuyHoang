type MyForEachCallback<T>=(element:T,index:number,array:T[])=>void
function myForEach<T>(arr: T[], callback: MyForEachCallback<T>): void {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

const numbers: number[] = [1, 2, 3, 4, 5, 6];

myForEach(numbers, (element, index, array) => {
  console.log(`Vị trí: ${index} | Phần tử: ${element} | Mảng:`, array);
})