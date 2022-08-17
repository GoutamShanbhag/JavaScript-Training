const items = [
  { name: "Toothbrush", price: 20 },
  { name: "Soap", price: 10 },
  { name: "Phone", price: 23000 },
  { name: "Shoes", price: 250 },
  { name: "Coffee", price: 10 },
  { name: "Cake", price: 30 },
  { name: "Washing Machine", price: 12000 },
  { name: "Computer", price: 60000 },
];

/*
    Find items in the array  having price less than 100
    using filter method
*/

const filteredItems = items.filter((item) => {
  return item.price <= 100;
});

console.log(filteredItems);

/*

    Create an array of item names using the items data 
*/

const itemNames = items.map((item) => {
  return item.name;
});

console.log(itemNames);

/*
    Get the Computer object from the data using find method.
*/

const foundItem = items.find((item) => {
  return item.name === "Computer";
});

console.log(foundItem);

/*
    print all the data from the itmes array using foreach method
*/

items.forEach((item) => {
  console.log(` Name : ${item.name}  --- Price : ${item.price} `);
});

/*
    Check if the items data has any free itmes

*/

const freeItems = items.some((item) => {
  item.price === 0;
});

console.log(freeItems);

/*

    Check if all the times in the array having the price 
    greater than 5
*/

const checkPrice = items.every((item) => {
  return item.price > 5;
});

console.log(checkPrice);

/*
    Find sum of all the prices in the array using reduce method

*/

const total = items.reduce((currtotal, item) => {
  return currtotal + item.price;
}, 0);

console.log(`Total price of all items : ${total}`);
