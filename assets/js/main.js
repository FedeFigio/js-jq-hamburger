// METODO 1
var aOpenMenu = $(".header-right>a")
var aCloseMenu = $(".hamburger-menu>a")



aOpenMenu.click(function() {
    $(".hamburger-menu").show("slow");
});

aCloseMenu.click(function() {
    $(".hamburger-menu").hide("slow");
});






// // METODO 2
// var aOpenMenu = $(".header-right>a")
// var aCloseMenu = $(".hamburger-menu>a")



// aOpenMenu.click(function() {
//     $(".hamburger-menu").addClass("active");
// });

// aCloseMenu.click(function() {
//     $(".hamburger-menu").removeClass("active");
// });