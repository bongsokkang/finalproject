$(document).ready(function() {
    
    $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var burger_id = $(this).children(".burger_id").val();
    console.log(burger_id)
    $.ajax({
        method: "GET",
        url: "/burgers/" + burger_id
    }).done(function(data) {
        // reload page to display devoured burger in proper column
        location.reload();
    })

    })
});