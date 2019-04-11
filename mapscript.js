var map1, map2, map3;
function initialize(){
    var mapOption1 = {
        zoom:2,
        center: {lat:40.758904, lng:-73.985128}
    };
    var mapOption2 = {
        zoom:10,
        center: {lat:40.758904, lng:-73.985128}
    };
    var mapOption3 = {
        zoom:18,
        center: {lat:40.758904, lng:-73.985128}
    };
    map1= new google.mapa.Map(document.getElementById('map_canvas1'),mapOptions1);
    map1= new google.mapa.Map(document.getElementById('map_canvas2'),mapOptions2);
    map1= new google.mapa.Map(document.getElementById('map_canvas3'),mapOptions3);
}
google.maps.event.addDomlidstener(window,'load',initialize);