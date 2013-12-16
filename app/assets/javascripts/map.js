$(function(){

  var map;

  function initialize() {
    var mapOptions = {
      zoom: 15,
      zoomControl: true,
      zoomControlOptions: {position: google.maps.ControlPosition.RIGHT_BOTTOM}
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    // Try HTML5 geolocation
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = new google.maps.LatLng(position.coords.latitude,
                                         position.coords.longitude);


        var image = '/assets/CurrentLocation.png';
        var user_marker = new google.maps.Marker({
          url: '/assets/CurrentLocation.png',
          position: pos,
          map: map,
          icon: image
        });

        map.setCenter(pos);
      }, function() {
        handleNoGeolocation(true);
      });
    } else {
      // Browser doesn't support Geolocation
      handleNoGeolocation(false);
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
  }

  function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
      var content = 'Error: The Geolocation service failed.';
    } else {
      var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
      map: map,
      position: new google.maps.LatLng(37.7749300, -122.4194200),
      content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
  }

  google.maps.event.addDomListener(window, 'load', initialize);
});