const computer = {
  brand: "Dell",
  model: "XPS 13",
  year: 2021,
  price: 999.99,
  hdd: "512GB SSD",
  ram: "16GB",
  processor: "Intel Core i7",
  graphics: "Intel Iris Xe",
  color: "Silver",
  warranty: "2 years",
};

// ** Accessing Keys of an Object
const keys = Object.keys(computer);
console.log(keys);

// ** Accessing Values of an Object
const values = Object.values(computer);
console.log(values);
