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
			var cheese_pizza = Object.create(Pizza);
			cheese_pizza.initialize("large");
			expect(cheese_pizza.size).to.equal("large");
		});
	});

	describe("setPrice", function(){
		it("adjusts the price based on the pizza size", function(){
			var cheese_pizza = Object.create(Pizza);
			cheese_pizza.initialize("large");
			cheese_pizza.setPrice();
			expect(cheese_pizza.price).to.equal(14);
		});
	});
});