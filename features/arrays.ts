// if you initalize an array as
// an empty array you need to declare
// the type otherwise you run into the "any" declaration
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values

// Help with "map"
carMakers.map(
  (car: string): string => {
    return car;
  }
);

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
