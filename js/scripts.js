// Business Logic
function userPizza(size, toppings) {
  this.size = size;
  this.toppings = [];
}

var show = 1;
var hide = 0.0;
var fade_speed = 'slow';
var makePizza;

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
      var newPizza = new userPizza(pizzaSize, pizzaToppings)
      var pizzaSize = $("select#sizeSelect").val();
      var pizzaToppings = $("input:checkbox[name=pizzaQuestions]:checked").each(function(){
        var eachTopping = $(this).val();
        newPizza.toppings.push(pizzaToppings);
      });
      $("input:checkbox[name=pizzaQuestions]:checked").each(function(){

      })
  })
})
