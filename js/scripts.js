// Business Logic
function userPizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

//UI Logic
$(document).ready(function(){
  $("form#pizzaToppings").submit(function(event) {
      event.preventDefault();
      debugger;
      var pizzaSize = $("select#sizeSelect").val();
      var pizzaToppings = $("input:checkbox[name=pizzaQuestions]:checked").val();
      var newPizza = new userPizza(pizzaSize, pizzaToppings)
      $("input:checkbox[name=pizzaQuestions]:checked").each(function(){

      })
  })
})
