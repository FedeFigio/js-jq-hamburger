var aOpenMenu = $(".header-right>a")
var aCloseMenu = $(".hamburger-menu>a")



aOpenMenu.click(function() {
    $(".hamburger-menu").show();
});

aCloseMenu.click(function() {
    $(".hamburger-menu").hide();
});