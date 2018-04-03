// Business Logic
function userPizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

var show = 1;
var hide = 0.0;
var fade_speed = 'medium';
var makePizza;

userPizza.prototype.pricePrototype = function (size, pizzaToppingsArray) {
  var total = 0;
  if (size === "12 inch") {
    total += 10;
  } else if (size === "14 inch") {
    total += 12;
  } else if (size === "18 inch") {
    total += 16;
  }
  if (pizzaToppingsArray.length < 1) {
    total += 0;
    this.price = total;
  } else {
    for (var i = 0; i < pizzaToppingsArray.length; i++) {
      total +=1;
      this.price = total;
    }
  }
}

userPizza.prototype.cost = function (price) {
  return "$" + this.price;
}

//UI Logic
$(document).ready(function(){
  //special test for checkbox/images
  $('input[name="pizzaQuestions"]').each(function() {
    makePizza = "#image_" + $(this).val();
    if($(this).prop('checked')) {
      $(makePizza).css('opacity', show);
    } else {
      $(makePizza).css('opacity', hide);
    }
  });

  $('input[name="pizzaQuestions"]').change(function(){
    makePizza = "#image_" + $(this).val();
    if($(this).prop('checked')) {
      $(makePizza).fadeTo(fade_speed, show);
    } else {
      $(makePizza).fadeTo(fade_speed, hide);
    }
  });

  //end test
  $("form#pizzaToppings").submit(function(event) {
      event.preventDefault();
      debugger;
      var pizzaSize = $("select#sizeSelect").val();
      var pizzaToppings = $("input:checkbox[name=pizzaQuestions]:checked");
      var pizzaToppingsArray =[];
        for (var i=0; i< pizzaToppings.length; i++) {
            pizzaToppingsArray.push($(pizzaToppings[i]).val());
        }
      var newPizza = new userPizza(pizzaSize, pizzaToppingsArray)
      var pizzaPrice = newPizza.pricePrototype(pizzaSize, pizzaToppingsArray)
      var pizzaCost = newPizza.cost(pizzaPrice);

      //Results Display
      $("#sizeResults").text(pizzaSize)
      $("#priceResults").text(pizzaCost)
      $("#toppingsResults").text("");
      $("input:checkbox[name=pizzaQuestions]:checked").each(function(){
        var selectedToppings = $(this).val();
        $("#toppingsResults").append(selectedToppings + "<br>");
      });
  })
})
