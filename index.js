const test = new Promise((resolve, reject) => {
  resolve("success");
});

const fn = async () => {
  const asyncTest = await test;
  console.log(asyncTest);
};

const promiseFunction = () => {
  return new Promise((resolve, reject) => {
    resolve("successful promise");
  });
};

fn();
promiseFunction().then((data) => console.log(data));

test.then((data) => console.log(data));
