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
		this.setPrice();
		this.toppings = [];
	},
	setPrice: function() {
		if (this.size === "large") {
			this.price = 14;
		} else if (this.size === "medium") {
			this.price = 11;
		} else {
			this.price = 9;
		}
	},
	addTopping: function(topping) {
		this.toppings.push(topping);
		this.price += topping.price;
	},
	formattedToppingsNames: function() {
		var toppingNames = [];
		this.toppings.forEach(function(topping){
			toppingNames.push(topping.type)
		});
		return toppingNames.join( ", ")
	},
};

var Order = {
	pizzas: [],
	cost: 0,
	addPizza: function(pizza) {
		this.pizzas.push(pizza);
		this.cost += pizza.price;
	}
};


$(function(){
	var newOrder = Object.create(Order);

	$("#pizza-form").submit(function(event){
		var toppings = [];
		
		var size = $('input[name=pizza-size]:checked', '#pizza-form').val()
		var newPizza = Object.create(Pizza);
		newPizza.initialize(size);

		if ($("#extraCheese").is(":checked")) {
			var extraCheese = Object.create(Topping);
			extraCheese.initialize("extra cheese", 1);
			newPizza.addTopping(extraCheese);
		}
		if ($("#pepperoni").is(":checked")) {
			var pepperoni = Object.create(Topping);
			pepperoni.initialize("pepperoni", 2);
			newPizza.addTopping(pepperoni);
		}
		if ($("#mushrooms").is(":checked")) {
			var mushrooms = Object.create(Topping);
			mushrooms.initialize("mushroom", 1);
			newPizza.addTopping(mushrooms);
		}
		if ($("#sausage").is(":checked")) {
			var sausage = Object.create(Topping);
			sausage.initialize("sausage", 2);
			newPizza.addTopping(sausage);
		}
		newOrder.addPizza(newPizza);
		debugger;
		$("#current-order").append("<li>" +
																	newPizza.size + " " +
																	newPizza.formattedToppingsNames() + " " +
																	"pizza: $" + newPizza.price +
																"</li>")
		$("#order-total").text(newOrder.cost);

		event.preventDefault();
	});

});
