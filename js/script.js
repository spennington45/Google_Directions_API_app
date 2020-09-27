let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 8,
  });
}

"use strict";

function initMap() {
  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: {
      lat: 41.85,
      lng: -87.65,
    },
    disableDefaultUI: true,
  });
  directionsRenderer.setMap(map);

  var onChangeHandler = function onChangeHandler() {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  };

  document
    .getElementById("start")
    .addEventListener("change", onChangeHandler);
  document
    .getElementById("end")
    .addEventListener("change", onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  directionsService.route({
      origin: {
        query: document.getElementById("start").value,
      },
      destination: {
        query: document.getElementById("end").value,
      },
      travelMode: google.maps.TravelMode.DRIVING,
    },
    function(response, status) {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
}
