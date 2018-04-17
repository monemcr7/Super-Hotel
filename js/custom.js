

/*global $, jQuery, alert*/




// Start AJAX get user information form api

$(document).ready(function() {
    'use strick';
        var userCont = document.querySelector('#user-info');
        var req = new XMLHttpRequest();
            req.onreadystatechange = function(){
                if(req.readyState === req.DONE){
                    var userContent = "";
                    var results = JSON.parse(req.response);
                    for (var i =0 ,ii = results.results.length;  i<ii;i ++){
                        userContent += '<li>'+
                                        '<img src="'+results.results[i].picture.medium +'" alt="Recent Post">'+
                                        '<a href="#" class="post-link">'+results.results[i].name.first +' '+results.results[i].name.last +'</a>'+
                                        '<p class="user-state">'+results.results[i].location.state +'</p>'+
                                        '</li>'
                        
                    }
                    userCont.innerHTML = userContent;
                }
            }
            req.open('GET' ,'https://randomuser.me/api/?results=4');
            req.send();
    
    // Datapicker
	
	$('#check-in , #check-out').datepicker({
		 duration: "fast",
		 showAnim: "slideDown", 
		 showOptions: {direction: "up"} 
	});
    
    


	//  Home Slider
	$('#slider .owl-carousel').owlCarousel({
		autoplay:true,
		autoplayTimeout:4000,
		autoplaySpeed:true,
		autoplayHoverPause:false,
		loop:true,
		navText:['<i class="fa fa-angle-left fa-3x"></i>','<i class="fa fa-angle-right fa-3x"></i>'],
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		nav:true,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
    
    //  Home Slider
	$('#testimonial .owl-carousel').owlCarousel({
		autoplay:true,
        autoplayTimeout:3000,
        loop:true,
        navText:[],
        nav:false,
        dots:true,
        responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

    // Google Map
	
	$('.map')
      .gmap3({
        center:[48.8620722, 2.352047],
        zoom:4
      })
      .marker([
        {position:[48.8620722, 2.352047]},
        {address:"86000 Poitiers, France"},
        {address:"66000 Perpignan, France", icon: "http://maps.google.com/mapfiles/marker_grey.png"}
      ])
      .on('click', function (marker) {
        marker.setIcon('http://maps.google.com/mapfiles/marker_green.png');
      });

 });
// Contact Form Validate

$(function () {
   'use strick';
    
	$("#username_error" , "#email_error" ,"#subject_error" ,"#message_error").hide();

	var error_username = false,
	 	error_email = false,
	 	error_subject = false,
	 	error_message = false;

	$("#form_username").focusout(function() {

		check_username();
		
	});


	$("#form_email").focusout(function() {

		check_email();
		
	});
			
	$("#form_subject").focusout(function() {

		check_subject();
		
	});
			
	$("#form_message").focusout(function() {

		check_message();
		
	});

	function check_username() {
	
		var username_length = $("#form_username").val().length;
		
		if(username_length < 5 || username_length > 20) {
			$("#username_error").html("Please enter your name!");
			$("#username_error").show();
			$("#form_username").css({"border-color":"red","margin-bottom":"25px"});
			error_username = true;
		} else {
			$("#username_error").hide();
			$("#form_username").css({"border-color":"#ccc","margin-bottom":"35px"});
		}
	
	}

	function check_email() {

		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	
		if(pattern.test($("#form_email").val())) {
			$("#email_error").hide();
			$("#form_email").css({"border-color":"#ccc","margin-bottom":"35px"});
		} else {
			$("#email_error").html("Please enter your email!");
			$("#email_error").show();
			$("#form_email").css({"border-color":"red","margin-bottom":"25px"});
			error_email = true;
		}
	
	}
			
	function check_subject() {
	
		var subject_length = $("#form_subject").val().length;
		
		if(subject_length < 5 || subject_length > 20) {
			$("#subject_error").html("Please enter the subject!");
			$("#subject_error").show();
			$("#form_subject").css({"border-color":"red","margin-bottom":"25px"});
			error_subject = true;
		} else {
			$("#subject_error").hide();
			$("#form_subject").css({"border-color":"#ccc","margin-bottom":"35px"});
		}
	
	}
			
	function check_message() {
	
		var message_length = $("#form_message").val().length;
		
		if(message_length < 5 || message_length > 100) {
			$("#message_error").html("Please enter at least 5 characters!");
			$("#message_error").show();
			$("#form_message").css({"border-color":"red","margin-bottom":"25px"});
			error_message = true;
		} else {
			$("#message_error").hide();
			$("#form_message").css({"border-color":"#ccc","margin-bottom":"35px"});
			
		}
	
	}

	$("#form-contact").submit(function() {
											
		error_username = false;
		error_email = false;
		error_subject = false;
		error_message = false;
											
		check_username();
		check_email();
		check_subject();
		check_message();
		
		if(error_username == false && error_email == false && error_subject == false && error_message == false ) {
			return true;
		} else {
			return false;	
		}

	});
	
	


	
});


/*  SCROLL TOP BUTTON */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop , #top-sc').fadeIn();
        } else {
            $('.scrollToTop , #top-sc').fadeOut();
        }
    });

    //Click event to scroll to top

    $('.scrollToTop , #top-sc').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


