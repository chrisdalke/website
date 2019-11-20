
$("#menu-bottom-span").addClass("menu-js-active");
$("#menu-bottom-span").removeClass("menu-opened").addClass("menu-closed");

$( "#menu-top-span" ).click(function() {
    if ($("#menu-bottom-span").hasClass("menu-closed")){
        $("#menu-bottom-span").removeClass("menu-closed").addClass("menu-opened");
    } else {
        $("#menu-bottom-span").removeClass("menu-opened").addClass("menu-closed");
    }
});
