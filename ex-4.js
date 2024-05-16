// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];

for (let i = 0 ; i < restaurants.length ; i++) {
    newRestaurants[i] = `Restaurant Name: ${restaurants[i]}`
}

console.log(newRestaurants);

// for (let name of restaurants) {
//     name = `Restaurant Name: ${name}`;
//     newRestaurants.push(name);
//   }
  
//   console.log(newRestaurants);

// `Restaurant Name: ${restaurants[i]}`