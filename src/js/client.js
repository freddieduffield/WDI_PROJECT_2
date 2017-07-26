/* global google:ignore */
let map;

$(init);

function init(){
  console.log('load');
  // $('#mapView').click(loadMap());
  clickToViewMap()
}

function clickToViewMap(e){
  $('#mapView').click(loadMap());
}

function loadMap(){
  console.log('where is map');
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: new google.maps.LatLng(51.515113, -0.072051)

  });
}
