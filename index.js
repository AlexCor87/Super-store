const inventory = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 5, name: "carrots", price: 2.25, category: "vegetable", quantity: 94 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

function logNames(items) {
  items.forEach((item) => console.log(item.name));
}

function getUppercaseNames(items) {
  return items.map((item) => item.name.toUpperCase());
}

function getItemById(items, id) {
  return items.find((item) => item.id === id);
}

function getItemPriceByName(items, name) {
  const foundItem = items.find((item) => item.name === name);
  return foundItem ? foundItem.price : "Item not found";
}

function getItemsByCategory(items, category) {
  return items.filter((item) => item.category === category);
}

function countItems(items) {
  return items.reduce((total, item) => total + item.quantity, 0);
}

function getTotalPrice(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

console.log("Welcome! We carry the following items:");
logNames(inventory);

console.log("Here are the names again in all uppercase:");
console.log(getUppercaseNames(inventory));

console.log(`In total, we have ${countItems(inventory)} items in stock.`);

const totalCost = getTotalPrice(inventory);
console.log(
  `It would cost $${totalCost?.toFixed(2)} to purchase everything in stock.`
);

const itemId = prompt("Enter the ID of an item:", "1");
console.log(`The item with id #${itemId} is:`);
console.log(getItemById(inventory, +itemId));

const itemName = prompt("Enter the name of an item:", "apple");
console.log(
  `The price of ${itemName} is ${getItemPriceByName(inventory, itemName)}.`
);

const category = prompt("Enter a category you would like to see:", "fruit");
console.log(`The items in the ${category} category are:`);
console.log(getItemsByCategory(inventory, category));
