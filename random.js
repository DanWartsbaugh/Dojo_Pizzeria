//I used tips from Stack Overflow to get Math.random to work

function randomPizza(crustType,sauceType,cheeses,toppings) {
    var pizza = {};
    crustType=["deep dish","hand tossed","thin crust"];
    sauceType=["traditional","marinara","barbecue","alfredo"];
    cheeses=["mozzarella","provolone","feta","cheddar","swiss"];
    toppings=["pepperoni","sausage","bacon","basil","black olives","mushrooms","onions"]

    pizza.crustType = crustType[Math.floor(Math.random()*crustType.length)];
    pizza.sauceType = sauceType[Math.floor(Math.random()*sauceType.length)];
    pizza.cheeses = cheeses[Math.floor(Math.random()*cheeses.length)];
    pizza.toppings = toppings[Math.floor(Math.random()*toppings.length)];
    return pizza;
}

console.log (randomPizza())