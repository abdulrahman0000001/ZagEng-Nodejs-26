function getUserValues() {
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

function getOrders(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      let Orders = ["order 1", "order 2"];
      console.log("Orders Loaded");
      resolve(Orders);
    }, 1000);
  });
}

function getOrderDetails(order) {
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

getUserValues()
  .then(user => getOrders(user.id))
  .then(order => getOrderDetails(order[1]))
  .then(details => console.log(details))
