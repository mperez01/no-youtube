// ==UserScript==
// @name     no-youtube
// @description		Replace youtube links to invisio.us 
// @version  1.0.1
// @grant    none
// @require        https://code.jquery.com/jquery-2.2.2.js
// @run-at        document-end
// ==/UserScript==

var j = jQuery.noConflict(true);

j(document).ready(function ($) {
 	 $('a').click(function(event){
     var addressValue = $(this).attr("href");
     var target = $(this).attr("target");
     console.log("target: " + target);
     if(addressValue.includes("youtube.com/")) {
       event.preventDefault();
       generateUrl(addressValue, target);
     } else if (addressValue.includes("youtu.be/")) {
  			event.preventDefault();
       	generateUrlAlternative(addressValue, target);
     }
	});
});

function generateUrl(addressValue, target) {
  var splitstring = addressValue.split("youtube.com/");
  var url = "https://invidio.us/" + splitstring[splitstring.length -1];
  console.log("url: " + url);
  window.open(url, target);
}

function generateUrlAlternative(addressValue, target) {
  var splitstring = addressValue.split("youtu.be/");
  var url = "https://invidio.us/" + splitstring[splitstring.length -1];
  console.log("url: " + url);
  window.open(url, target);
}
