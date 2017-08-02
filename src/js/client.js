$( document ).ready(function() {
      $(".button-collapse").sideNav();
    });
/* global google:ignore */
let map;
//
$(init);
//
function init(){
  console.log('load');
  // showGridHideNav();
  clickToViewMap();
}


//
function clickToViewMap(){
  $('.mapView').on('click', () => {
    loadMap();
    // $('main').hide();
  });
}
//
function loadMap(){

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: new google.maps.LatLng(42.331429, -83.045753)
  });
  $('.mapView').hide();
}

// function showGridHideNav() {
//   $('.show-grid').on('load', () => {
//     console.log('fuck a-duck');
//   });
}
