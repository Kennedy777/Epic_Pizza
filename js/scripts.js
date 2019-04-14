// business logifunction Order (sizeSelect, crustType, toppings){
  function Order(size, crust, toppings){
    this.size=size;
    this.crust=crust;
    this.toppings=toppings;
    this.basePrice;
  }

 Order.prototype.calculateTotal = function(){
  var basePrice = 0;
  if (this.size=="small"){
     this.basePrice +=12;
      }else if(this.size=="medium"){
     this.basePrice +=16;
  } else {
     this.basePrice +=20;
     for (i=0; i<this.toppings.length; i++){
       this.basePrice +=2;
  }
}

// Front
$(document).ready(function()){
  $("form#Order").submit(function(event){
    event.preventDefault();
    var mySize =  $("input:radio[name="size"]:checked").val();
    var myCrust = $("input:radio[name="crust"]:checked").val();
    var myTops = [];
    $("input:radio[name="toppings"]:checked").each(function(){
       myTops.push($(this).val());
     });
//for output (confirmation)
    var receipt= new Order(mySize, myCrust, myTops);
    $("#confirmation").show();
    $(".orderReview").text(receipt);
    $(".finalPrice").text(calculateTotal());
  });
});
