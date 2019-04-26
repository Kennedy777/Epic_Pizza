// business logic 
function Order (size, toppings) {  
  this.size = size;
  this.toppings = toppings;
}

Order.prototype.calcPrice = function () {
  var price = 0;

  if (this.size === "Small") {
    price += 12;
  } else if (this.size === "Medium") {
    price += 16;
  } else if (this.size === "Large") {
    price += 10;
  }
  for (var i = 0; i < this.toppings.length; i++) {
    price +=1;
  }
  return price;
}
//User interface logic

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var mySize = $("#size-select").val();
    var myToppings = $('.topping-option:checkbox:checked').map(function() {
      return this.value;
    }).get();

    var pizzaOrder = new Order(mySize, myToppings);

    $(".cost").text("$"+pizzaOrder.calcPrice());

  });
});
