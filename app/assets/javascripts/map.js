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


        var locationImage = '/assets/CurrentLocation.png';
        var user_marker = new google.maps.Marker({
          position: pos,
          map: map,
          icon: locationImage
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

      var infoWindow = new google.maps.InfoWindow();
      var something = 0
      var object = data
      for (var i = 0; i < object.length; i++) {
        var addressLatLng = new google.maps.LatLng(object[i]["latitude"], object[i]["longitude"]);

        // Data for infowindows
        var destinationLatLng = new google.maps.LatLng(object[i]["d_latitude"], object[i]["d_longitude"]);
        var addressContent = "<strong>" + object[i]["ride_time"] + "<br><br>" + object[i]["address"] +
                            "</strong><br><br>" + "to <br><br>" + "<strong>" +
                            object[i]["destination"] + "</strong>"

        var destinationContent = "<strong>" + object[i]["destination"] + "</strong><br><br>" +
                                "leaving at <strong>" + object[i]["ride_time"] + "</strong> from <br><br>"
                                 + "<strong>" + object[i]["address"] + "</strong>"

        var addressImage = '/assets/greenmarker.png';
        var addressMarker = new google.maps.Marker({
              position: addressLatLng,
              map: map,
              icon: addressImage,
              animation: google.maps.Animation.DROP
            });

        addressMarker.content = addressContent;

        var destinationMarker = new google.maps.Marker({
              position: destinationLatLng,
              map: map,
              animation: google.maps.Animation.DROP
            });

        destinationMarker.content = destinationContent;

        google.maps.event.addListener(addressMarker, 'click', function(){
          infoWindow.setContent(this.content);
          infoWindow.open(this.getMap(), this);
        });

        google.maps.event.addListener(destinationMarker, 'click', function(){
          infoWindow.setContent(this.content);
          infoWindow.open(this.getMap(), this);
        });

      }

    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);
});

