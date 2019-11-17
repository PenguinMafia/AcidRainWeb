const config = require('config')
var google = require('google')

const GoogleMapsClient = require('@google/maps').createClient({
    key: config.get('api.google-api-key')
  });

var map;
var locations = [];
function init() {
    var maps = new google.maps;
    var myLatlng = maps.LatLng(0.0, 0.0);
    console.log('init method ran');
    var myOptions = {
        zoom : 4,
        center : myLatlng,
        mapTypeId : google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
//if you want to store your coordinates as a stingg you should be consistent
    locations.push("0.0,0.0");
    show_markers();
}

init();

    function show_markers() {

        for(var i = 0; i < locations.length; i++) {
            //if you are expecting a user to input a single pair of coordinates in the input box you will need to do this
            var loc = locations[i].split(",")
            var lat = parseFloat(loc[0])
            var lng = parseFloat(loc[1])
            marker = new google.maps.Marker({
                position : new google.maps.LatLng(lat, lng), 
                map : map
            });
        }
    }

    function add_item() {
        var item = document.frm.inputbox.value;
        locations.push(item);
        show_markers();
        document.frm.outputbox.value = locations;
    }