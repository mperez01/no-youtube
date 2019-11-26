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
  var longURL = "youtube.com/";
  var shortURL = "youtu.be/";

  $('a').click(function (event) {
    var addressValue = $(this).attr("href");
    var target = $(this).attr("target");
    console.log("target: " + target);
    if (event.ctrlKey || event.metaKey) {
      target = "_blank";
    }

    if (addressValue.includes(longURL)) {
      event.preventDefault();
      generateUrl(addressValue, target, longURL);
    } else if (addressValue.includes(shortURL)) {
      event.preventDefault();
      generateUrl(addressValue, target, shortURL);
    }
  });
});

function generateUrl(addressValue, target, ytURL) {
  var splitstring = addressValue.split(ytURL);
  var url = "https://invidio.us/" + splitstring[splitstring.length - 1];
  console.log("url: " + url);
  window.open(url, target);
}