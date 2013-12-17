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

    // Sets default location to San Francisco if User does not support Geolocation
    var options = {
      map: map,
      position: new google.maps.LatLng(37.7749300, -122.4194200),
      content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
  }


  // ajax request to display locations in the database

  $.ajax({
    type: 'GET',
    url: '/rides',
    dataType: 'json'
    }).done(function(data){

      // console.log(data);

      var object = data
      for (var i = 0; i < object.length; i++) {
        var addressLatLng = new google.maps.LatLng(object[i]["latitude"], object[i]["longitude"]);
        var destinationLatLng = new google.maps.LatLng(object[i]["d_latitude"], object[i]["d_longitude"]);

        var addressMarker = new google.maps.Marker({
              position: addressLatLng,
              map: map,
              animation: google.maps.Animation.DROP
            });
        console.log(addressMarker);


      }

    });



  google.maps.event.addDomListener(window, 'load', initialize);
});