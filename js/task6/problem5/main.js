function getData(callBack) {
  setTimeout(() => {
    callBack("Data Loaded");
  }, 1000);
}
getData(result => console.log(result))

///////////////////////////////////////////////////////////

function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 1000);
  });
}

getData().then(result => console.log(result));

///////////////////////////////////////////////////////////

function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 1000);
  });
}

async function f() {
  const result = await getData();
  console.log(result);
}

f();
