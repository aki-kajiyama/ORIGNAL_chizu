/* jshint curly:true, debug:true */
/* globals $, firebase, location, moment */
$(document).ready(function() {
  $('.slider').bxSlider({
    auto: true,
    pause: 5000,
  });

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
    //collection : 'div'		// 要素を指定の要素に積もらせる設定(画像を設定してもflakeColorで指定した要素の色が積もります)
    //image : './image.png'		// 要素を指定の画像に変更
  });
});

//  var map = new google.maps.Map(document.getElementById('map'), {
//         center: {
//           lat: -34.397, //緯度を設定
//           lng: 150.644 //経度を設定
//         },
//         zoom: 8 //地図のズームを設定
//       });


function initMap() {
  var center = new google.maps.LatLng(36.184066, 138.010876); // 4県の境目
  var map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 8.5,
    mapTypeId: 'roadmap'
  });

  var markers = []; // Google maps上に表示されてるマーカー

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
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };

          markers.push(new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location
          }));


        })
      }
    });
  });
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
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };

          markers.push(new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            // description: place.geometry,
            position: place.geometry.location
          }));


        })
      }
    });
  });
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
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };

          markers.push(new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location
          }));


        })
      }
    });
  });
  
}
