// Accordion close & open
document.querySelectorAll('.services-accordion__card-head').forEach((accordionToggle) => { 
    accordionToggle.addEventListener('click', () => { 
    const accordionItem = accordionToggle.parentNode; 
    const accordionContent = accordionToggle.nextElementSibling; 
  
          // If this accordion item is already open, close it.
     if (accordionContent.style.maxHeight) { 
         accordionContent.style.maxHeight = null; 
         accordionItem.classList.remove('active'); 
        } else {
          accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'; 
              accordionItem.classList.add('active'); 
          }
      });
});

// Load more
$(function () {
    $(".services-accordion__card").slice(0, 5).show();
    $("#show-more-btn").on('click', function (e) {
        e.preventDefault();
        $(".services-accordion__card:hidden").slice(0, 3).slideDown();
        if ($(".services-accordion__card:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        if ( !$(".services-accordion__card:hidden").length) {
            $(this).hide();
          }

    });
});

// Intro text typed
window.ityped.init(document.querySelector('.typed-text'),{
    strings: ["кав'ярня","кафе","ресторан","бар","кондитерська"],
    loop: true,
    showCursor: false,
    typeSpeed:  200,
    backSpeed:  50,
});

// Active hamburger menu icon
$(document).ready(function(){
    $(".header-hamburger").click(function(){
      $(this).toggleClass("active");
      $('body').toggleClass("add-overflow");
    });
});

// Open hamburger menu
const ham = document.querySelector(".header-hamburger");
const menu = document.querySelector('.header-overlay ul');
const links = menu.querySelectorAll('.header-overlay ul li');

var tl = gsap.timeline({ paused: true });

tl.to(menu, {
	duration: 0.5,
	opacity: 1,
	height: 'calc(100vh - 56px)',
	ease: 'expo.inOut',
})
tl.from(links, {
	duration: 1,
	opacity: 0,
	y: 20,
	stagger: 0.1,
	ease: 'expo.inOut',
}, "-=0.5");

tl.reverse();

ham.addEventListener('click', () => {
	tl.reversed(!tl.reversed());
});

// Scroll to section
$(document).ready(function () {
    $("a.scroll-to").on('click', function (event) {
        event.preventDefault();
        var hash = this.hash;

        $(".header-hamburger").removeClass('active');
        $('body').removeClass("add-overflow");

        $('html, body').animate({
            scrollTop: $(hash).offset().top - 2
        }, 800, function () {
            window.location.hash = hash;
        });
    });
});

// Close mobile menu after link click
$(document).ready(function () {
    $("a.mobile-scroll-to").on('click', function (event) {
        event.preventDefault();
        var hash = this.hash;

        $(".header-hamburger").removeClass('active');
        $('body').removeClass("add-overflow");

        tl.reversed(!tl.reversed());

        setTimeout(function() {
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 2
            }, 800, function () {
                window.location.hash = hash;
            });
        }, 1000);
    });
});

// Show & hide header on scroll
var header = document.querySelector("#header");
var navbarHeight = header.offsetHeight;
var lastScrollTop = 0;

window.onscroll = function () { scrollHide() };

function scrollHide() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }
    lastScrollTop = st <= 0 ? 0 : st;
}