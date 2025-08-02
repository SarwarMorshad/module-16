const mobile = {
  brand: "Samsung",
  model: "Galaxy S21",
  year: 2021,
  price: 799.99,
  storage: "128GB",
  ram: "8GB",
  color: "Phantom Gray",
  isNew: true,
};

// ** Accessing Entries of an Object using for in loop
for (const key in mobile) {
  //   console.log(key);
  //   console.log(mobile[key]); // Accessing value using key
  console.log(`${key}: ${mobile[key]}`); // Formatted output template literal
}
