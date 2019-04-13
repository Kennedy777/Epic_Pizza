// business logic

var order=function (size, crustType, toppings) {
    this.size=size;
    this.crust=crust;
    this.toppings=[];
}

 Order.prototype.calculateTotal = function() {
  var basePrice = 0;
  if (this.size=="small"){
     basePrice +=12;
  }else if(this.size=="medium"){
     orderTotal +=16
  } else (this.size=="large"){
     orderTotal +=20
  }
  };




// Front
$(document).ready(function(){
  $("form#Order").click(function(event){
    var pizzaSize =  $("#size").val();
    var crustType = $("#crust").val();
    var toppingsPick = $("input:checkbox[name=toppings]:checked").each(function() {
    toppingsPrice += 2;

  )};
});




function Order(crust, crust, size) {
  this.basePrice = basePrice;
  this.toppings=option;
  this.size =size;
}


Order.prototype.calculateTotal = function(total) {
  size = sizePrice;
  toppings = [];
}
var size= Order.prototype.sizePrice = function(size) {
if (this.size==small){
  this.total=10;
  return this.total;
}else if(this.size==medium){
  var price=14;
  return price;
}

}

Order.prototype.addToppings = function() {

}
}
};

$(document).ready(function(){
  $("form#Order").click(function(event){
    event.preventDefault();
    var size=$("input:radio[name=size]:checked").val();
    var topping=$("#topping");
    var pizza = new Order(size,topping);
    pizza.addSize(size);

var toppingsPrice = 0;
  $("input:checkbox[name=toppings]:checked").each(function() {
    toppingsCounter += 2;
  })
var sizePrice =

var sauce = $("#sauce").val();
}

};
});
