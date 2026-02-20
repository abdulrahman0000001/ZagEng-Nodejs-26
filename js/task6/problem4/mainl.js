async function getUserValues() {
  return new Promise(resolve => {
    setTimeout(() => {
      let user = {
        id: 1,
        name: "Zeyad"
      };
      console.log("User loaded");
      resolve(user);
    }, 1000);
  });
}

async function getOrders(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      let Orders = ["order 1", "order 2"];
      console.log("Orders Loaded");
      resolve(Orders);
    }, 1000);
  });
}

async function getOrderDetails(order) {
  return new Promise(resolve => {
    setTimeout(() => {
      let details = {
        color: "red",
        len: "15cm",
        width: "20cm"
      }
      console.log("Details Loaded");
      resolve(details);
    }, 1000);
  });
}


async function f() {
  let user = await getUserValues()
  let orders = await getOrders(user.id)
  let details = await getOrderDetails(orders[1])
  console.log(details)
}
f()
