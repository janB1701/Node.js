var express = require ('express');
var router = express.Router();
const repo = require ('../repository/cars.repo');

router.get ('/', (req, res) => {
	res.render ('cars', {
		title: 'List of cars',
		cars: repo.cars
	});
});

module.exports = router;