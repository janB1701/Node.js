var express = require ('express');
var router = express.Router();
const repo = require ('../repository/cars.repo');

router.get ('/:id', (req, res) => {
	let id = parseInt (req.params.id);
	console.log (id);
	let company;
	for (let car of repo.cars) {
		console.log (car.companyName.id);
		if (car.companyName.id === id) {
			company = car.companyName;
			break;
		}
	}
	if (company) {
		console.log ('usao')
		res.render ('company', {
			title: 'Info about ' + company,
			company: company
		})
	}else {
		res.sendStatus (404);
	}
});

module.exports = router;