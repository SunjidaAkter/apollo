//mocking
//data server theke antesi na nijerai promise create kortesi ekei mocking bole
//string type promise
const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data is fetched";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data");
    }
  });
};
const getPromise = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};
//boolean type promise
const makePromiseBool = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data");
    }
  });
};
const getPromiseBool = async (): Promise<boolean> => {
  const data = await makePromiseBool();
  return data;
};
//object type promise
interface DataType {
  data: string;
}
const makePromiseObj = (): Promise<DataType> => {
  return new Promise<DataType>((resolve, reject) => {
    const data: DataType = { data: "data is fetched" };
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data");
    }
  });
};
const getPromiseObj = async (): Promise<DataType> => {
  const data = await makePromiseObj();
  return data;
};

//json place holder
interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const getTodo = async (): Promise<ITodo> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  return await res.json();
};
// console.log(res.json());
const getTodoData = async (): Promise<void> => {
  const result = await getTodo();
  console.log(result);
};
getTodoData();
