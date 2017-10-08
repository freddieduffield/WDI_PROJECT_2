/* global google:ignore */
$( document ).ready(function() {
  $('.button-collapse').sideNav();
});


// $(init);
// //
// function init(){
//   // clickToViewMap();
//   // gapi.client.setApiKey('AIzaSyAGoDZYedbnZGbdp2_0FRLTD8i7PDLjTdA');
//   // gapi.client.load('youtube', 'v3', function() {
//   //   // yt api is ready
//   // });
// }

// $(function() {
// $('form').on('submit', function(e) {
//   e.preventDefault();
//   // prepare the request
//   var request = gapi.client.youtube.search.list({
//     part: 'snippet',
//     type: 'video',
//     q: encodeURIComponent($('#search').val()).replace(/%20/g, '+'),
//     maxResults: 3,
//     order: 'viewCount',
//     publishedAfter: '2015-01-01T00:00:00Z'
//   });
//   // execute the request
//   request.execute(function(response) {
//     var results = response.result;
//     $('#results').html('');
//     $.each(results.items, function(index, item) {
//       $.get('tpl/item.html', function(data) {
//         $('#results').append(tplawesome(data, [{'title': item.snippet.title, 'videoid': item.id.videoId}]));
//       });
//     });
//   });
// });
// // });


// function clickToViewMap(){
//   $('.mapView').on('click', () => {
//     loadMap();
//     // $('main').hide();
//   });
// }

// function loadMap(){
//
//   map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 14,
//     center: new google.maps.LatLng(42.331429, -83.045753)
//   });
//   $('.mapView').hide();
// }
