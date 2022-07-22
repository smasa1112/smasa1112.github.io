$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });

    $(".hold-on-move").click(function() {
        var target_id_name=('#'+($(this).attr('id').substr(5)));
        console.log(target_id_name)
        console.log(typeof ($(this).attr('id')));
        var position = $(target_id_name).offset().top;
        const speed = 500;
        $(".navbar-burger").removeClass("is-active");
        $(".navbar-menu").removeClass("is-active");
        $("html,body").animate({scrollTop:position},speed);
        
    })
  });