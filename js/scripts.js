// Business Logic
function userPizza(size, toppings) {
  this.size = size;
  this.toppings = [];
}

//UI Logic
$(document).ready(function(){
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
