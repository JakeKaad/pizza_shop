// The user can go onto the pizza site and order a pizza;
// The pizza has size options that affect how many slices the pizza will have
// The pizza has toppings options
// the pizza has a price that is affected by size and toppings
// Objects needed: 
// Order- Order has an array of pizzas, and a price total 
// Pizza- default pizza is a plain cheese pizza, has a toppings array, price total, and slice total
// Toppings- has a price modifier that changes the price of the pizza somehow

var Topping = {
	initialize: function(type, price) {
		this.type = type;
		this.price = parseInt(price);
	}
};

var Pizza = {
	initialize: function(size) {
		this.size = size;
		this.price = 0;
	},
	setPrice: function() {
		if (this.size === "large") {
			this.price += 14;
		} else if (this.size === "medium") {
			this.price += 11;
		} else {
			this.price += 9;
		}
	},
};

var order = {};