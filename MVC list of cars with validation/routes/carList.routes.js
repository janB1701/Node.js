var express = require ('express');
var router = express.Router();
const repo = require ('../repository/cars.repo');
const { body, validationResult } = require('express-validator');


router.use (express.json());
router.use (express.urlencoded({ extended: false }));

router.get ('/', (req, res) => {
	res.render ('cars', {
		title: 'List of cars',
		cars: repo.cars
	});
});

router.get ('/addCar', (req, res) => {
	res.render ('addCar', {
		title: "Adding new car"
	})
})



router.post ('/addCar',[
	body('name').not().isEmpty().trim().escape(),
	body ('companyName').not().isEmpty().trim().escape(),
	//body('yearOfEstablishment').isLenght({min: 1900, max:2022})
], (req, res) => {
	console.log ('usao'); 
	console.log (req.body); 
	try {
		let newCar = repo.addCar(
			req.body.name, 
			req.body.companyName,
			req.body.yearOfEstablishment,
			req.body.perishability
		);
		res.redirect ('/cars');
	} catch (error) {
		res.render ('addCar', {
			title: "Try again",
			err: JSON.stringify (error)
		})
	}
})

module.exports = router;