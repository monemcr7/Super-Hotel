
# Super-Hotel Website Project


The super is unique website suited for a hotel , a resort, a motel or an apartment building rental. the HTML files include a booking form with calendar , about, news,  offers and contact.


## Pages

- Home
- About
- Booking
- News
- Offer
- Contact

## Features Index

- Responsive design
- Compatible with all browsers
- Bootstrap 3.3.7
- HTML5 / CSS3
- Contact form
- Owl Carousel 2
- Random User API

## Documentation of CSS selectors

** Make hover in service box used class name service-hover **

```css
.service-hover {
    position: absolute;
    content: "";
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(3, 3, 30, 0.8) url(../img/logo-2.png) no-repeat center center;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}
```

** used class name btn-style to change background-color in buttons used this class **

```css
.btn-style {
    background: #9f8c5f;
}
```

** used class name .post-link to style all div used this class in news page **

```css
.post-link {
    color: #04142b;
    font-size: 15px;
}
```

## Documentation of js function

** Created functions to check input in validation form **

```js

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
```





** Created function to scroll top button **

```js

 $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
}
```

### Domain: 
>http://menamdesign.eb2a.com/super/index.html