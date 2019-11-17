//export NODE_ENV=prod
const config = require('config')
var google = require('google')
//console.log(config.get('api.google-api-key'))

var LatLongTest;

const GoogleMapsClient = require('@google/maps').createClient({
    key: config.get('api.google-api-key')
  });

//myLatLng = new google.maps.LatLng({lat: -34, lng: 151}); 

function init(){
  var latlng = new google.maps.LatLng(-43.552965, 172.47315);
  input(-43.552965, 172.47315, 1);
  var myOptions = {
    zoom: 10,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map"), myOptions);
}

function input(lat, long, weight) {
  LatLongTest = new google.maps.LatLng(lat, long)
}
  

/* Data points defined as a mixture of WeightedLocation and LatLng objects */
var heatMapData = [
    {location: LatLongTest, weight: 0.5}
  ];
var sanFrancisco = google.maps.LatLng(37.774546, -122.433523);
  
  map = new GoogleMapsClient(document.getElementById('map'), {
    center: sanFrancisco,
    zoom: 13,
    mapTypeId: 'satellite'
  });
  
  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatMapData
  });
  heatmap.setMap(map);