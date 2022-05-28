AOS.init();

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks
        .classList
        .toggle('active')
})


const navbar = document.querySelector('.navbar');

window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        navbar
            .classList
            .add("scrolled");
    } else {
        navbar
            .classList
            .remove("scrolled");
    }
})



//Nav on scroll
jQuery(function($){
	var topMenuHeight = $("#desktop-nav").outerHeight();
	$("#desktop-nav").menuScroll(topMenuHeight);
});

// COPY THE FOLLOWING FUNCTION INTO ANY SCRIPTS
jQuery.fn.extend({
    menuScroll: function(offset) {
		// Declare all global variables
        var topMenu = this;
		var topOffset = offset ? offset : 0;
        var menuItems = $(topMenu).find("a");
        var lastId;
	
		// Save all menu items into scrollItems array
        var scrollItems = $(menuItems).map(function() {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

		// When page is scrolled
        $(window).scroll(function(){
            var nm = $("html").scrollTop();
            var nw = $("body").scrollTop();
            var fromTop = (nm > nw ? nm : nw)+topOffset;

			
			// When the page pass one #id section, return all passed sections to scrollItems and save them into new array current
            var current = $(scrollItems).map(function(){
                if ($(this).offset().top <= fromTop)
                return this;
            });
			
			// Get the most recent passed section from current array
            current = current[current.length-1];
            var id = current && current.length ? current[0].id : "";
            if (lastId !== id) {
                lastId = id;
                // Set/remove active class
                $(menuItems)
                .parent().removeClass("active")
                .end().filter("[href='#"+id+"']").parent().addClass("active");
            }      

        });
    }
});



//How it works steps
$('.steps').on('click', '.step--active', function() {
    $(this).removeClass('step--incomplete').addClass('step--complete');
    $(this).removeClass('step--active').addClass('step--inactive');
    $(this).next().removeClass('step--inactive').addClass('step--active');
  });
  
  $('.steps').on('click', '.step--complete', function() {
    $(this).removeClass('step--complete').addClass('step--incomplete');
    $(this).removeClass('step--inactive').addClass('step--active');
    $(this).nextAll().removeClass('step--complete').addClass('step--incomplete');
    $(this).nextAll().removeClass('step--active').addClass('step--inactive');
  });