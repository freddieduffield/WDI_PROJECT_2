/* global google:ignore */
console.log('loaded');
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'),
    {
      zoom: 8,
      center: {lat: 42.331429, lng: -83.045753}
      mapTypeId: 'satellite'
    });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function(){
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status){
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      console.log(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });

    } else {
      alert('Your place was not found, for the following reason: ' + status);
    }
  });
}

function addMarkerForEachPlace(address) {

}
