$(function () {
    $("#toggle-mobile-nav").click(function (e) {
        e.stopPropagation();
        $("#page").toggleClass("mobile-nav-opened");
    });
    
    $(document).on("click", function(e) {
        if (!$(e.target).closest("#mobile-nav").length && !$(e.target).closest("#toggle-mobile-nav").length) {
            // Klick außerhalb des Menüs und des Menü-Toggle-Buttons
            $("#page").removeClass("mobile-nav-opened");
        }
    });
});
