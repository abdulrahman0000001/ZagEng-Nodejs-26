function getUserValues() {
    setTimeout(() => {
        console.log("User Loaded")
    }, 1000);
}

function getOrders(userID) {
    getUserValues()
    setTimeout(() => {
        console.log("Orders Loaded")

    }, 1000);
}

function getOrderDetails(orderID) {
    getOrders()
    setTimeout(() => {
        console.log("Details Loaded")

    }, 1000);
}




getOrderDetails()
