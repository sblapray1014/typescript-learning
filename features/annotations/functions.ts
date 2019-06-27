const add = (a: number, b: number): number => {
  return a - b;
};

const multiply = function(a: number, b: number): number {
  return a * b;
};

// use type annotation VOID if you don't expect to receive anything
const logger = (message: string): void => {
  console.log(message);
};

// NEVER expect a function to return anything ever - EDGE CASES
const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

// Destructure properties like Date and Weather off Object todaysWeather before you declare types
const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
