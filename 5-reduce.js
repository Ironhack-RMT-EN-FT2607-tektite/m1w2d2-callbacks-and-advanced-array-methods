//* reduce()

let randomNumbers = [4,8,15,16,23,42]

//* sum all the numbers

let sum = randomNumbers.reduce((accumulator, element) => {
  console.log(accumulator, element)

  // return the subsequent value of the accumulator
  if (element % 2 === 0) {
    return accumulator + element
  } else {
    return accumulator - element
  }
}, 100)

console.log(sum)

const cars = [
  { brand: "Mercedes-Benz", year: 2012, weight: 0.8 },
  { brand: "Porsche", year: 2020, weight: 1.3 },
  { brand: "Bugatti", year: 2003, weight: 0.5 },
  { brand: "Volvo", year: 2010, weight: 1.9 },
  { brand: "Smart", year: 2010, weight: 0.1 },
];

//* generate one string that includes all the car brands
// "Mercedes-Benz, Porsche, Bugatti ...."

let allBrands = cars.reduce((acc, car) => {

  return acc + `${car.brand} - `

}, "")

console.log(allBrands.slice(0, -3))