function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1)
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2)
var p3 = pizzaOven("thick", "pesto", ["parmesan", "goat cheese"], ["artichoke hearts", "spinach", "peppers"]);
console.log(p3)
var p4 = pizzaOven("thin", "bianco", ["blue cheese", "swiss", "fondita"], ["anchovies", "sundried tomatoes", "kale"]);
console.log(p4)