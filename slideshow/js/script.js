var thumb = document.getElementById("galerie").getElementsByTagName("a");
var big = document.getElementById("velkyobrazek");

for (i=0; i < thumb.length; i++)
{
thumb[i].onclick = function() {
	big.src = this.href;
	big.style.display = "block";
	return false;   
}
}

var scrollPx = 5;    //o kolik px se scrolluje -puvodne(25)
var scrollTime = 50;    //prodleva mezi scrollovanim v ms -puvodne(50)
var interval = false;

function scrollLeft(el) {

elm = document.getElementById(el)

if (elm.scrollLeft > scrollPx)
	elm.scrollLeft -= scrollPx;
else
{
	elm.scrollLeft = 0;
	clearInterval(interval)
	interval = false;
}
}

function scrollRight(el) {

elm = document.getElementById(el)

if ((elm.scrollLeft + elm.clientWidth + scrollPx) < elm.scrollWidth)
	elm.scrollLeft += scrollPx;
else {
	elm.scrollLeft = (elm.scrollWidth - elm.clientWidth);
	clearInterval(interval);
	interval = false;
}
}

window.onload = function() {

if (!document.getElementById || !document.createElement)
return false;

var Prev = document.getElementById("prev");
var Next = document.getElementById("next");

Prev.onmouseover = function() {
	interval = setInterval('scrollLeft("galerie")', scrollTime)  
}

Next.onmouseover = function() {
	interval = setInterval('scrollRight("galerie")', scrollTime)
}

Prev.onmouseout = function() {
	if (interval)
	clearInterval(interval);
	interval = false;
}

Next.onmouseout = function() {
	if(interval)
	clearInterval(interval);
	interval = false;
}

}





















console.log();

// var velkyobrazek = document.getElementById("velkyobrazek").onclick = function() {myFunction()};
// var demo = document.getElementById("demo");

// function myFunction() {
//     demo.innerHTML = "you clicked on the big picture!";
// }



// // $('.obrazek')
// // 	.css({ position: 'relative' })
// // 	.animate({ left: 400, top: 400 }, 2000);







// // $(document).ready(function(){
// //   $('.directorySlider').directorySlider();
// // });





// var dir = "/images";
// var fileextension = ".jpg";
// $.ajax({
//     //This will retrieve the contents of the folder if the folder is configured as 'browsable'
//     url: dir,
//     success: function (data) {
//         //List all .jpg file names in the page
//         $(data).find("a:contains(" + fileextension + ")").each(function () {
//             var filename = this.href.replace(window.location.host, "").replace("http://", "");
//             $(".slideswrapper").append("<img src='" + dir + filename + "'>");
//         });
//     }
// });



// (function($) {

// 	var slides = $('.blizzardslides'),
// 			controls = slides.find('a'),
// 			items = slides.find('<img>');

// 	controls.click(function(){
// 			var $this = $(this),
// 					element;

// 			// if ( $this.is('.next') ) {
// 			// 	element = slides.find('.slideswrapper img:visible').next();
// 			// 	if(!element.lenght) {
// 			// 		element = slides.find('.slideswrapper img:first-child');
// 			// 	}
// 			// }		
			

// 			items.hide();
// 			//element.show();

// 			return false;
// 	});




// })(jQuery);



































