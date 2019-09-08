/* jshint curly:true, debug:true */
/* globals $, firebase, location, moment */

// ***********************スライダー************************

$(document).ready(function() {
  $('.slider').bxSlider({
    auto: true,
    pause: 5000,
  });

  // ***********************雪のアニメーション************************

  $(document).snowfall({
    flakeCount: 200, // 要素の数
    flakeColor: '#FFF', // 要素の色
    flakeIndex: 999999, // 要素のz-index
    minSize: 2, // 要素の最小サイズ
    maxSize: 8, // 要素の最大サイズ
    minSpeed: 1, // 要素の最小落下スピード
    maxSpeed: 2, // 要素の最大落下スピード
    round: true, // 要素に丸みを持たせる？
    shadow: false // 要素に影をつける？
  });
});


// ***********************map検索************************

function initMap() {
  var center = new google.maps.LatLng(36.184066, 138.010876); // 4県の境目
  var map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 8.5,
    mapTypeId: 'roadmap'
  });

  var markers = []; // Google maps上に表示されてるマーカー

  var iw = new google.maps.InfoWindow()

  // ***********************スキーボタン************************

  $('#skiing_button').on('click', function() {
    var request = {
      query: 'スキー場',
      location: center,
      bounds: new google.maps.LatLngBounds( // 左下から右上の頂点を元に描いた長方形の境界線
        new google.maps.LatLng(35.201336, 137.584541),
        new google.maps.LatLng(37.022412, 138.564163)
      ),
    };
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    var service = new google.maps.places.PlacesService(map);
    service.textSearch(request, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        results.forEach(function(place) {
          var icon = {
            url: "icon/icon1.png",
            scaledSize: new google.maps.Size(25, 25)
          };

          var m = new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location
          });

          console.log('place', place)
          google.maps.event.addListener(m, 'click', function(event) {
            var content = '<div style="font-weight: 500;">' + place.name + '</div><div>' + place.formatted_address + '</div>'
            new google.maps.InfoWindow({ content: content }).open(map, m);
          });

          markers.push(m);
        })
      }
    });
  });

  // ***********************ホテルボタン************************

  $('#hotel_button').on('click', function() {
    var request = {
      query: 'ホテル',
      location: center
    };
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    var service = new google.maps.places.PlacesService(map);
    service.textSearch(request, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        results.forEach(function(place) {
          var icon = {
            url: "icon/icon2.png",
            scaledSize: new google.maps.Size(25, 25)
          };

          var m = new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location
          });

          console.log('place', place)
          google.maps.event.addListener(m, 'click', function(event) {
            var content = '<div style="font-weight: 500;">' + place.name + '</div><div>' + place.formatted_address + '</div>'
            new google.maps.InfoWindow({ content: content }).open(map, m);
          });

          markers.push(m);
        })
      }
    });
  });

  // ***********************温泉ボタン************************

  $('#spa_button').on('click', function() {
    var request = {
      query: '温泉',
      location: center
    };
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    var service = new google.maps.places.PlacesService(map);
    service.textSearch(request, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        results.forEach(function(place) {
          var icon = {
            url: "icon/icon3.png",
            scaledSize: new google.maps.Size(25, 25)
          };

          var m = new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location
          });

          console.log('place', place)
          google.maps.event.addListener(m, 'click', function(event) {
            var content = '<div style="font-weight: 500;">' + place.name + '</div><div>' + place.formatted_address + '</div>'
            new google.maps.InfoWindow({ content: content }).open(map, m);
          });

          markers.push(m);
        })
      }
    });
  });

}
