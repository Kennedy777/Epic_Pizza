// business logifunction Order (sizeSelect, crustType, toppings){
$(document).ready(function){
  function Order(size,crust, toppings){
    this.size=size;
    this.crust=crust;
    this.toppings=[];
  }

 Order.prototype.calculateTotal = function(){
  var basePrice = 0;
  if (this.size=="small"){
     basePrice +=12;
      }else if(this.size=="medium"){
     basePrice +=16;
  } else (this.size=="large"){
     basePrice +=20;
  }

for (var i=0; i< this.toppings.length; i++) {
    basePrice +=2;
  }
  return basePrice;
}
// };

 // Order.prototype.toppingsPrice=function(){
 //   if(this.toppings.length===0){
 //     this.basePrice=basePrice
 //   }else if (this.toppings.length==)
 // }

// Front
  $("form#Order").click(function(event){
    event.preventDefault();
    var mySize =  $("input[name=size").val();
    var myCrust = $("#crust").val();
    var topArray = [];
     $("input:checkbox[name=toppings]:checked").each(function();
       topArray.push($(this).val());
//for output (confirmation)

    var receipt= new Order(pizzaSize, crustType, toppingsPick);
    $(".orderReview").text(receipt);
    $(".finalPrice").text(calculateTotal());
  )};
});
