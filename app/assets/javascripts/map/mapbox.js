// var click = document.getElementById('click'),
//     mousemove = document.getElementById('mousemove');

var mapApp = {};

mapApp = {
    initialize: function(){
      this.loadMap();
      this.mouseActions();
    },
    loadMap: function(){
        this.map = L.mapbox
                   .map('map', 'lkbgift.i30dhib8',  { zoomControl: false })
                   .setView([40.714623, -74.00663], 16);

    },
    mouseActions: function(){
        this.map.on('mousemove click', function(e) {
            console.log( e.containerPoint.toString() + ', ' + e.latlng.toString());
        });
    }
}

mapApp.initialize();
