// business logifunction Order (sizeSelect, crustType, toppings){
  function Order(size, crust, toppings){
    this.size=size;
    this.crust=crust;
    this.toppings=toppings;
    this.basePrice=0;
  }

 Order.prototype.calculateTotal = function(){
  if (this.size=="small"){
     this.basePrice +=12;
      }else if(this.size=="medium"){
     this.basePrice +=16;
  } else {
     this.basePrice +=20;
   } for (i=0; i<this.toppings.length; i++){
       this.basePrice +=2;
  }
}

Order.prototype.confMessage = function() {
  return "Thank you for your order! Your total will be: $" + this.basePrice;
};

// Front
$(document).ready(function(){
  $("form#Order").submit(function(event){
    event.preventDefault();
    var mySize =  $("input[name=size]:checked").val();
    var myCrust = $("input[name=crust]:checked").val();
    var myTops = [];
    $("input[name=toppings]:checked").each(function(){
       myTops.push($(this).val());
    });

    var orderConf= new Order(mySize, myCrust, myTops);

    $("#confirmation").show();
     $("#orderReview").text(receipt);
     $("#finalPrice").text(calculateTotal());
  });
});
