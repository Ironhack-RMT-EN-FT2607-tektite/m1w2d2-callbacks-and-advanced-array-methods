//* filter()

const cars = [
  { brand: "Mercedes-Benz", year: 2012, weight: 0.8 },
  { brand: "Porsche", year: 2020, weight: 1.3 },
  { brand: "Bugatti", year: 2003, weight: 0.5 },
  { brand: "Volvo", year: 2010, weight: 1.9 },
  { brand: "Smart", year: 2010, weight: 0.1 },
];

//* create a new arr with only the cars from 2012 and above

let filteredArr = cars.filter((car) => {
  // console.log("potato")
  // console.log(car)
  // a filter ALWAYS return a boolean
  if (car.year >= 2012) {
    // true => include the car
    return true
  } else {
    // false => don't include the car
    return false
  }

  // return car.year >= 2012
})

//* one line solution
// let filteredArr = cars.filter((car) => car.weight >= 1)

console.log(filteredArr)

