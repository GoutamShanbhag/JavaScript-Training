const promiseFunction = () => {
  const promise1 = new Promise((resolve, reject) => {
    resolve("promise1 resolved");
  });

  const promise2 = new Promise((resolve, reject) => {
    resolve("promise2 resolved");
  });

  const promise3 = new Promise((resolve, reject) => {
    resolve("promise3 resolved");
  });

  promise1
    .then((res) => {
      console.log(res);
      return promise2;
    })
    .then((res) => {
      console.log(res);
      return promise3;
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("error ", err);
    });
};

promiseFunction();

//Sequential Promise

const sequentialAsyncFunction = async () => {
  const promise1 = new Promise((resolve, reject) => {
    resolve("promise1 resolved");
  });

  const promise2 = new Promise((resolve, reject) => {
    resolve("promise2 resolved");
  });

  const promise3 = new Promise((resolve, reject) => {
    resolve("promise3 resolved");
  });

  const result1 = await promise1;
  const result2 = await promise2;
  const result3 = await promise3;

  console.log(result1);
  console.log(result2);
  console.log(result3);
};

sequentialAsyncFunction();

//Parallel Functions

const parallelAsyncFunction = async () => {
  const promise1 = new Promise((resolve, reject) => {
    resolve("promise1 resolved");
  });

  const promise2 = new Promise((resolve, reject) => {
    resolve("promise2 resolved");
  });

  const promise3 = new Promise((resolve, reject) => {
    resolve("promise3 resolved");
  });

  const result1 = promise1;
  const result2 = promise2;
  const result3 = promise3;

  const allResults = await Promise.all([result1, result2, result3]);
  console.log(allResults);
};

parallelAsyncFunction();
