
$(function() {

    'use strict';

    $('.fakeLoader').fakeLoader({

        timeToHide: 1400, //Time in milliseconds for fakeLoader disappear

        zIndex: "999",//Default zIndex

        spinner: "spinner1",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'

        bgColor: "#282741" //Hex, RGB or RGBA colors

    });
       
    // smooth scroll
    $("a").on("click", function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({

                scrollTop: $(hash).offset().top  - 50

            }, 850);

        }

    });

    // hide navbar on mobile after click
    $('.navbar-nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // carousel resume
    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 10
    });

    // collapse show on resume
    $('.collapse-show').collapse();

    // porfolio filterizr
    $('.filtr-container').imagesLoaded( function() {
        var filterizr = $('.filtr-container').filterizr();
    });

    // portfolio filter
    $('.portfolio-filter-menu li').on('click', function() {
        $('.portfolio-filter-menu li').removeClass('active');
        $(this).addClass('active');
    });

    // portfolio magnific popup
    $('.portfolio').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: '.portfolio-popup', // the selector for portfolio item
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    // navbar on scroll
    // $(window).on("scroll", function() {

    //     var vScroll = $(this).scrollTop();

    //     if( vScroll > 100) {
    //         $(".navbar").addClass("fix");
    //     }
    //     else {
    //         $(".navbar").removeClass("fix");
    //     }

    // });


});

// Autofill Progress Bar

var progressBars = document.querySelectorAll(".progress > div");


function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("aria-valuenow");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 15);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}


window.addEventListener("scroll", checkScroll);

$('.slider').slick({
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    fade: true,
    speed: 500,
    infinite: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100
  })

//   For Whatsapp Chat Light

$(function() {
    $('#WAButton').floatingWhatsApp({
      phone: '+91 9306572699', //WhatsApp Business phone number International format-
      headerTitle: 'Chat with us on WhatsApp!', //Popup Title
      popupMessage: "Hello, Welcome to Sajh Dhaj..... How may we help you today?", //Popup Message
      showPopup: true, //Enables popup display
      buttonImage: '<img src="./images/whatsapp.svg"/>', //Button Image
      // headerColor: 'crimson', //Custom header color
      position: "right",    
      size: "60px"
    });
});

//   For Whatsapp Chat Dark

$(function() {
    $('#WAButton-Dark').floatingWhatsApp({
      phone: '+91 9306572699', //WhatsApp Business phone number International format-
      headerTitle: 'Chat with us on WhatsApp!', //Popup Title
      popupMessage: "Hello, Welcome to Sajh Dhaj..... How may we help you today?", //Popup Message
      showPopup: true, //Enables popup display
      buttonImage: '<img src="./images/whatsapp.svg"/>', //Button Image
      headerColor: '#262d31', //Custom header color
      position: "right",  
      size: "60px"  
    });
});