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