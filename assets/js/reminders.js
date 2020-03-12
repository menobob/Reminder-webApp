$(document).ready(function() {

    // check off specific item in list when clicked
    $("ul").on("click", "li", function() {
        $(this).toggleClass("completed");
    });

    // removing events when span clicked
    $("ul").on("click", "span", function(event) {
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
        });
        event.stopPropagation();
    });

    // adding item to list when user inputs and press enter
    $("input[type='text']").keypress(function(event) {
        if(event.which === 13) {
            var remindItem = $(this).val();
            $(this).val("");
            $("ul").append("<li><span><i class=\"far fa-trash-alt\"></i></span> " + remindItem + "</li");
        }
    });
    $(".fa-calendar-check").click(function() {
        $("input[type='text'").fadeToggle();
    });

});
