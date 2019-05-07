var image = [];
var price = [];
var names = [];
var totalprice = 0;

$(".dab").click(function() {
    
    
    $(".totals").show();
    $(".checkout").show();
    
    var imagelist = $(".image").val();
    image.push(imagelist);

    var pricelist = parseInt($(".dollarsign").val());
    price.push(pricelist);
    totalprice+=pricelist;
    price.forEach(function(){
    $(".blue").html("Total price: $ " + totalprice );
    });
    

    var namelist = $(".Name").val();
    names.push(namelist);
    names.forEach(function(){
    $(".blue2").html("Number of items: " + names.length );
    });
    $(".overall").append("<div class='yay'> <div class='imagelist'><p>Item:<img src=" +imagelist+ "> </p></div> <div class='pricelist'><p>Price:$"+pricelist+"</p></div> <div class='namelist'><p>Name: "+namelist+"</p></div> </div>");
});

$(".oof").click(function() {
    alert("Thank you for shopping at speedwagon's and purchasing "+names[0]+ " . Come agane soon.");
});
$(".totals").hide();
$(".checkout").hide();