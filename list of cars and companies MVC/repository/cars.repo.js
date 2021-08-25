const Company = require ('./../models/company.model');
const Car = require ('../models/cars.model');

class CarRepository {
	constructor () { 
		this.cars = [];
		this.seedCars();
	}

	seedCars () {
		this.cars.push (
			new Car ('Volkswagen Golf 2',
			new Company (100, 'Volkswagen', 'Germany', new Date ('1937-05-28')),
			'Germany', 'From 1983-1992', 'durable'
		));
		this.cars.push (
			new Car ('Volkswagen Jetta',
			new Company (100, 'Volkswagen', 'Germany', new Date ('1937-05-28')),
			'Germany', 'From 1979-present', 'very durable'
		));
		this.cars.push (
			new Car ('Mazda Miata', 
			new Company (200, 'Mazda', 'Japan', new Date ('1920-01-30')),
			'Japan', '1989-present', 'sport durability'
		));
	}
}

const repoInstance = new CarRepository();

module.exports = repoInstance;