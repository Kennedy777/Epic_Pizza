function NewOrder(total, option, size) {
  this.basePrice = basePrice;
  this.options=option;
  this.size =size;
}

PizzaOrder.prototype.calculateTotal = function(total) {
  size = sizePrice;
  toppings = [];
}

PizzaOrder.prototype.sizePrice = function(size) {
if (this.size==small){
  this.total=10;
  return this.total;
}else if(this.size==medium){
  var price=14;
  return price;
}

}

PizzaOrder.prototype.addToppings = function() {

}
}
};

$(document).ready(function(){
  $("form#NewOrder").click(function(event){
    var size=$("#size");
    var topping=$("#option");
    var pizza = new Order(size,topping);
    pizza.addSize(size);

var toppingsPrice = 0;
  $("input:checkbox[name=toppings]:checked").each(function() {
    toppingsCounter += 2;
  })
var sizePrice =  $("input:radio[name=size]:checked").val();

var sauce = $("#sauce").val();
}

};
});
