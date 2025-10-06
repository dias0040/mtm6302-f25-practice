const orders = [];

//customers place orders

orders.push("espresso");
orders.push("croissant");
orders.push("latte");
orders.push("muffin");

console.log("queue", orders);

//barista serves the first order
let servedOrder = orders.shift();
console.log("served order:", servedOrder);
console.log("updated queue", orders);

//barista serves the second order
servedOrder = orders.shift();
console.log("served order:", servedOrder);
console.log("updated queue", orders);
