//Exercise-1
const Car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2022,
};

Car.start = function () {
  console.log('Starting the car.');
};

console.log(Car);

//Exercise-2
Car.drive = function () {
  console.log('Driving the car.');
};

Car.start();
Car.drive();
