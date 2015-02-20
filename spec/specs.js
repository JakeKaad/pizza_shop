describe("Topping", function(){
	describe("initialize", function (){
		it("assigns a topping type", function(){
			var cheese = Object.create(Topping);
			cheese.initialize("cheese", 1);
			expect(cheese.type).to.equal("cheese");
		});

		it("assigns a topping price", function(){
			var cheese = Object.create(Topping);
			cheese.initialize("cheese", "1");
			expect(cheese.price).to.equal(1);
		});
	});
});

describe("Pizza", function() {
	describe("initialize", function(){
		it("sets the pizza size", function(){
			var cheesePizza = Object.create(Pizza);
			cheesePizza.initialize("large");
			expect(cheesePizza.size).to.equal("large");
		});

		it("sets the pizza's price", function() {
			var cheesePizza = Object.create(Pizza);
			cheesePizza.initialize("large");
			expect(cheesePizza.price).to.equal(14);
		});
	});

	describe("setPrice", function(){
		it("adjusts the price based on the pizza size", function(){
			var cheesePizza = Object.create(Pizza);
			cheesePizza.initialize("large");
			cheesePizza.setPrice();
			expect(cheesePizza.price).to.equal(14);
		});
	});

	describe("addToppings", function() {
		it("adds topping to pizza", function(){
			var pepperoniPizza = Object.create(Pizza);
			var pepperoni = Object.create(Topping);
			pepperoniPizza.initialize();
			pepperoni.initialize("pepperoni", 1)
			pepperoniPizza.addTopping(pepperoni);
			expect(pepperoniPizza.toppings[0].type).to.equal("pepperoni");
		});

		it("adjusts the price of pizza", function(){
			var pepperoniPizza = Object.create(Pizza);
			var pepperoni = Object.create(Topping);
			pepperoniPizza.initialize("large");
			pepperoni.initialize("pepperoni", 1)
			pepperoniPizza.addTopping(pepperoni);
			expect(pepperoniPizza.price).to.equal(15);
		});
	});
});


describe("Order", function(){
	describe("addPizza", function(){
		it("adds pizza to pizzas array", function(){ 
			var takeOut = Object.create(Order)
			var cheesePizza = Object.create(Pizza)
			takeOut.addPizza(cheesePizza);
			expect(takeOut.pizzas.length).to.equal(1);
		});

		it("adjusts the order cost", function(){
			var takeOut = Object.create(Order)
			var cheesePizza = Object.create(Pizza)
			cheesePizza.initialize("large");
			takeOut.addPizza(cheesePizza);
			expect(takeOut.cost).to.equal(14);
		});
	});
});