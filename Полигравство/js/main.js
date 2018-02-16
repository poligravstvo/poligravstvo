/*
 * Theme Name: Magic Multiperpose Onepage  template
 * File name: main.js
 * Theme URL: http://www.kamric.com/magic/
 * Description: Magic Multiperpose Onepage template
 * Author: Kamric
 * Author URL: https://themeforest.net/user/kamric
 * Version: 1.0
 */
 
(function($) {
    "use strict";
	
  //Run function when document ready
  
 
  jQuery(document).ready(function($) 
{
	init_gototop(); 
	init_loader();
    init_pagescroll();
    init_menumobile();
	init_wowanimation();
	init_fullheigh();
	init_imageslide();
	init_testimonial();
	
  
  });


 /*------------------------------------------*/
  /*           /*. Go to top /*
  /*------------------------------------------*/



  function init_gototop()
  {
    if ($('#back-to-top').length)
    {
      var scrollTrigger = 100,
        backToTop = function ()
        {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > scrollTrigger)
          {
            $('#back-to-top').addClass('show');
          }
          else
          {
            $('#back-to-top').removeClass('show');
          }
        };
      backToTop();
      $(window).on('scroll', function ()
      {
        backToTop();
      });
      $('#back-to-top').on('click', function (e)
      {
        e.preventDefault();
        $('html,body').animate(
        {
          scrollTop: 0
        }, 900);
      });
    }
  }
   
  /*------------------------------------------*/
  /*          /*. Navigation /*
  /*------------------------------------------*/


  $(window).scroll(function ()
  {
    if ($(".navbar").offset().top > 0)
    {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    }
    else
    {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });
  
      /*------------------------------------------*/
    /*           /*. Typist Text Banner /*
    /*------------------------------------------*/
	
	

	"function" == typeof Typist && new Typist
	(document.querySelector(".typist-text"), {
      letterInterval: 60,
      textInterval: 3e3
    }), $(), $(window).on("scroll", function () {
      $()
    });
	


  /*------------------------------------------*/
  /*      /*. loader /*
  /*------------------------------------------*/


    function init_loader()
  {
		$("#loader").fadeOut("slow", function () {
			$("#preloader").delay(300).fadeOut("slow")
		})
	
  }

 

  /*------------------------------------------*/
  /*          /*. page scroll /*
  /*------------------------------------------*/


  function init_pagescroll()
  {
    $('a.page-scroll').on('click', function (e)
    {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname)
      {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length)
        {
          $('html,body').animate(
          {
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  }


  /*------------------------------------------*/
  /*           /*.  Menu Mobile Toggle /*
  /*------------------------------------------*/



  function init_menumobile()
  {
    $('.navbar-collapse ul li a').on('click', function (e)
    {
      $('.navbar-toggle:visible').click();
    });
  }



  /*------------------------------------------*/
  /*           /*.  WOW ANIMATION /*
  /*------------------------------------------*/


  function init_wowanimation()
  {
    var wow = new WOW(
    {
      mobile: false
    });
    wow.init();
  }


   /*------------------------------------------*/
    /*           /*. full-heigh banner /*
    /*------------------------------------------*/
	
	
	 function init_fullheigh(){
		 
	 $(".full-height").height($(window).height()), 
	 $(window).on("resize", function () {
     
	  $(".full-height").height($(window).height())
    })
	}
	
	
	/*------------------------------------------*/
    /*           /*. Image Slide/*
    /*------------------------------------------*/
	
	function init_imageslide(){
	  $("#owl-slider").owlCarousel({
      nav: !0,
      loop: !0,
      autoplay: !0,
      margin: 0,
      navText: ["<a><span></span></a>", "<a><span></span></a>"],
      responsive: {
        0: {
          items: 1,
          dots: !1
        },
        600: {
          items: 1,
          dots: !1
        },
        1e3: {
          items: 1
        }
      }  
    });
    }
   

	/*------------------------------------------*/
    /*           /*. Testimonial /*
    /*------------------------------------------*/
	
	
	function init_testimonial(){
	$("#testimonial-list").owlCarousel({
      autoplay: !0,
      loop: !0,
      items: 1,
      navigation: !0,
      pagination: !1,
      itemsDesktop: [1e3, 1],
      itemsDesktopSmall: [900, 2],
      itemsTablet: [600, 2],
      itemsMobile: [479, 1]
	  
    });
	}
	




})(jQuery); // JavaScript Document