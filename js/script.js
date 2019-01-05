jQuery(document).ready(function ($) {
     
    //Cache some variables
    var slider = $('.slider');
    button1 = $('.button1');
    mywindow = $(window);
    //SET UP COMBINED SCROLL PLUGIN
    $('.nav').onePageNav();

    //Setup waypoints plugin
    slider.waypoint(function (event, direction) {
        //cache the variable of the data-slide attribute associated with each slide
        dataslide = parseInt($(this).attr('data-slide'));
        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the previous navigation link 

        if (direction === 'down') {
            $('.nav li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the next navigation link 
        else {
            $('.nav li[data-slide="' + (dataslide-1) + '"]').addClass('active').next().removeClass('active');
        }
    });
    
    //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class 
    //from navigation link slide 2 and adds it to navigation link slide 1. 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.nav li [data-slide="0"] a').addClass('active');
            $('.nav li [data-slide="1"] a').removeClass('active');
            
        }
       
        if ($('.nav li[data-slide="1"],.nav li[data-slide="2"], .nav li[data-slide="3"],.nav li[data-slide="5"],.nav li[data-slide="6"],.nav li[data-slide="8"],.nav li[data-slide="9"],.nav li[data-slide="11"]').hasClass('active')) {
            $('.nav li a').removeClass('light');
            $('.nav li a').addClass('dark');  
            
        }
        else if ($('.nav li[data-slide="4"],.nav li[data-slide="7"],.nav li[data-slide="10"]').hasClass('active')) {
            $('.nav li a').removeClass('dark');
            $('.nav li a').addClass('light');
        }

        else if ($('.nav li[data-slide="12"]').hasClass('active')) {
            $('.nav li a').removeClass('dark');
            $('.nav li a').removeClass('light');
        }

    });
    
    button1.click(function () {
        $("#home").trigger("play"); // plays the audio


        setTimeout(
            function () {
                $("#1920").trigger("play");

            }, 2000);
    });

});