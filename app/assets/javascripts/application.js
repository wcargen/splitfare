// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){

// Google Map
var map;
function initialize() {
  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(37.7833, -122.4167)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

// Google Places Autocomplete for Ride Addresses
var ride_address = document.getElementById('ride_address');
var ride_destination = document.getElementById('ride_destination');
var options = {
    types: [],
    componentRestrictions: {country: 'us'}
};

var autocomplete_address = new google.maps.places.Autocomplete(ride_address, options);
var autocomplete_destination = new google.maps.places.Autocomplete(ride_destination, options);

google.maps.event.addDomListener(window, 'load', initialize);


});