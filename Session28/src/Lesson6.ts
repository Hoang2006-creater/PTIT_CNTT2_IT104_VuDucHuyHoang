type StringCallback = (result: string) => void;

function task1(next: StringCallback): void {
  setTimeout(() => {
    const message: string = "Task 1 được thực thi";
    console.log(message);
    next(message);
  }, 1000);
}

function task2(next: StringCallback): void {
  setTimeout(() => {
    const message: string = "Task 2 được thực thi";
    console.log(message);
    next(message);
  }, 1500);
}

function task3(next: StringCallback): void {
  setTimeout(() => {
    const message: string = "Task 3 được thực thi! Hoàn thành";
    console.log(message);
    next(message);
  }, 2000);
}

task1((res1: string) => {
  task2((res2: string) => {
    task3((res3: string) => {
    });
  });
});
