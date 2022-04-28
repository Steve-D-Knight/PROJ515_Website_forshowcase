
var rightbarbuttons = "Place Hold";

var BluePin = L.icon({
    iconUrl: 'pin.png',

     iconSize:     [40, 40], // size of the icon
     iconAnchor:   [0, 40], // point of the icon which will correspond to marker's location
     popupAnchor:  [40, 0] // point from which the popup should open relative to the iconAnchor
});

for(i = 0; i <= node.length-1; i++){
    if(node[i].name == "MAX_latlon"){
        MAX_index = i;
        break;
    };
};
for(i = 0; i <= node.length-1; i++){
    if(node[i].name == "MIN_latlon"){
        MIN_index = i;
        break;
    };
};
for(i = 0; i <= node.length-3; i++){
    if(node[MAX_index].Latitude <= node[i].Latitude){
        node[MAX_index].Latitude = node[i].Latitude;
    };
};
for(i = 0; i <= node.length-3; i++){
    if(node[MAX_index].Longitude >= node[i].Longitude){
        node[MAX_index].Longitude = node[i].Longitude;
    };
};
for(i = 0; i <= node.length-3; i++){
    if(node[MIN_index].Latitude >= node[i].Latitude){
        node[MIN_index].Latitude = node[i].Latitude;
    };
};
for(i = 0; i <= node.length-3; i++){
    if(node[MIN_index].Longitude <= node[i].Longitude){
        node[MIN_index].Longitude = node[i].Longitude;
    };
};

var map_longitude_average = (node[MAX_index].Longitude + node[MIN_index].Longitude)/2.0;
var map_latitude_average = (node[MAX_index].Latitude + node[MIN_index].Latitude)/2.0;

node[MAX_index].Latitude = node[MAX_index].Latitude + 0.001;
node[MAX_index].Longitude = node[MAX_index].Longitude - 0.0015;
node[MIN_index].Latitude = node[MIN_index].Latitude - 0.001;
node[MIN_index].Longitude = node[MIN_index].Longitude + 0.0015;

var map_center = [map_latitude_average, map_longitude_average];
var map = L.map('map').setView(map_center, 17);


/*--------------------------------------------------- Building the HTML ---------------------------------------------------*/
//place holders
var temp_heatmap_button = '<button id="sub_menu_item" onclick="heatmap_toggle(1)"><span class="text">Turn On Temperature Heatmap</span></button>';
var humi_heatmap_button = '<button id="sub_menu_item" onclick="heatmap_toggle(2)"><span class="text">Turn On Humidity Heatmap</span></button>'
//place holders -end-                         

var Temp_heatmap_toggle_value = 0;
var Humi_heatmap_toggle_value = 0;
var Heatmap_flag = 0;
function Heatmap_buttons(){
    if(Temp_heatmap_toggle_value == 1){
        for(i=0; i<=resolution+1; i++){
            for(j=0; j<=resolution+1; j++){
                temp_heatmappolygon[i][j].addTo(map);
            };
        };
        temp_heatmap_button = '<button id="sub_menu_item_grey" onclick="heatmap_toggle(0)"><span class="text">Turn Off Temperature Heatmap</span></button>';
    }
    else if(Humi_heatmap_toggle_value == 1){
        for(i=0; i<=resolution+1; i++){
            for(j=0; j<=resolution+1; j++){
                humi_heatmappolygon[i][j].addTo(map);
            };
        };
        humi_heatmap_button = '<button id="sub_menu_item_grey" onclick="heatmap_toggle(0)"><span class="text">Turn Off Humidity Heatmap</span></button>'
    }
    else{
        toggle_resets();
    };
};
function toggle_resets(){
    Temp_heatmap_toggle_value = 0;
    Humi_heatmap_toggle_value = 0;
    Heatmap_flag = 0;
    for(i=0; i<=resolution+1; i++){
        for(j=0; j<=resolution+1; j++){
            temp_heatmappolygon[i][j].remove();
            humi_heatmappolygon[i][j].remove();
        };
    };
    temp_heatmap_button = '<button id="sub_menu_item" onclick="heatmap_toggle(1)"><span class="text">Turn On Temperature Heatmap</span></button>';
    humi_heatmap_button = '<button id="sub_menu_item" onclick="heatmap_toggle(2)"><span class="text">Turn On Humidity Heatmap</span></button>'
};

function heatmap_toggle(heatmap_choice){
    if(heatmap_choice == 1){
        toggle_resets();
        Temp_heatmap_toggle_value = 1;
        Humi_heatmap_toggle_value = 0;
    }
    else if(heatmap_choice == 2){
        toggle_resets();
        Temp_heatmap_toggle_value = 0;
        Humi_heatmap_toggle_value = 1;
    }
    else{
        toggle_resets();
    };
    Heatmap_buttons();
    button_reload();
};
var MAP_button = '<div><button id="top_menu_item" onclick="MAP_MODE()"><span class="text">Map</span></button></div>';

function button_reload(){
    var top_menu = temp_heatmap_button + humi_heatmap_button;
    document.getElementById('top_menu').innerHTML = top_menu;
};
button_reload();

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaW1hc3BvbmdlIiwiYSI6ImNreGd0bDJvdjB3djcyb25wNjc3bHhlbHIifQ.6Rhq1q-91PVxBhUh6ql40Q'
}).addTo(map);
