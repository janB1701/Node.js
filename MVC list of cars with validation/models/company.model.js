const CompanyClass = 
	class Company {
		constructor (id, name, country, yearOfEstablishment, rating) {
			this.id = id;
			this.name = name;
			this.country = country;
			this.yearOfEstablishment = yearOfEstablishment;
			this.rating = rating;
		}
		get formattedCompany () {
			return ((parseInt(this.rating) > 3) ? 'Big and successful company: ' : 'Car company: ' ) +
			this.name + 'established ' + this.yearOfEstablishment;
		}
	};
CompanyClass.prototype.toString = function() {
	return this.formattedCompany;
}

module.exports = CompanyClass;