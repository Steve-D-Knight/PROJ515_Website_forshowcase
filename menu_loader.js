// var URL = window.location.href;
var Main_Menu = 'place holder';

var link_into_html = '<div><form><button ';
var active_html = 'id="menu_active" class="button-58" ';
var inactive_html = 'id="menu_inactive" class="button-58" ';
var link_outro_html = '</button></form></div>';

var home_link_html = 'formaction="index.html">Home';
var map_link_html = 'formaction="map.html">Map Demo';
var Graph_link_html = 'formaction="Graph.html">Graph Demo';
var Dashboard_html = 'formaction="Dashboard.html">Dashboard Demo';

var home_link = link_into_html + inactive_html + home_link_html + link_outro_html;
var map_link = link_into_html + inactive_html + map_link_html + link_outro_html;
var Graph_link = link_into_html + inactive_html + Graph_link_html + link_outro_html;
var Dashboard_page = link_into_html + inactive_html + Dashboard_html + link_outro_html;

var real_website_html = 'formaction="https://dev.dl2hi1h31q3zz.amplifyapp.com/" class="danger">Real website';
var real_website = link_into_html + inactive_html + real_website_html + link_outro_html;

var Housing_page_html = 'formaction="housing.html">Housing info';
var Housing_page = link_into_html + inactive_html + Housing_page_html + link_outro_html;


var breadboard_page_html = 'formaction="Breadboard.html">Electronics';
var breadboard_page = link_into_html + inactive_html + breadboard_page_html + link_outro_html;

var Health_bar = '<div id="Healthbar"><div id="Health_pointer">&nbsp;</div></div>';

function Health_bar_function(value, width){
    Health_bar = '<div id="Healthbar" style="padding: 0px ' + (width * (1 - (value / 100.0))) + 'px 0px ' + (width * ((value / 100.0))) + 'px;"><div id="Health_pointer">&nbsp;</div></div>';
    return Health_bar;
};

if(document.URL.includes("index.html")){
    home_link = link_into_html + active_html + home_link_html + link_outro_html;
    map_link = link_into_html + inactive_html + map_link_html + link_outro_html;
    Graph_link = link_into_html + inactive_html + Graph_link_html + link_outro_html;
    Housing_page = link_into_html + inactive_html + Housing_page_html + link_outro_html;
    breadboard_page = link_into_html + inactive_html + breadboard_page_html + link_outro_html;
    Dashboard_page = link_into_html + inactive_html + Dashboard_html + link_outro_html;
}
else if(document.URL.includes("map.html")){
    home_link = link_into_html + inactive_html + home_link_html + link_outro_html;
    map_link = link_into_html + active_html + map_link_html + link_outro_html;
    Graph_link = link_into_html + inactive_html + Graph_link_html + link_outro_html;
    Housing_page = link_into_html + inactive_html + Housing_page_html + link_outro_html;
    breadboard_page = link_into_html + inactive_html + breadboard_page_html + link_outro_html;
    Dashboard_page = link_into_html + inactive_html + Dashboard_html + link_outro_html;
}
else if(document.URL.includes("Graph.html")){
    home_link = link_into_html + inactive_html + home_link_html + link_outro_html;
    map_link = link_into_html + inactive_html + map_link_html + link_outro_html;
    Graph_link = link_into_html + active_html + Graph_link_html + link_outro_html;
    Housing_page = link_into_html + inactive_html + Housing_page_html + link_outro_html;
    breadboard_page = link_into_html + inactive_html + breadboard_page_html + link_outro_html;
    Dashboard_page = link_into_html + inactive_html + Dashboard_html + link_outro_html;
}
else if(document.URL.includes("housing.html")){
    home_link = link_into_html + inactive_html + home_link_html + link_outro_html;
    map_link = link_into_html + inactive_html + map_link_html + link_outro_html;
    Graph_link = link_into_html + inactive_html + Graph_link_html + link_outro_html;
    Housing_page = link_into_html + active_html + Housing_page_html + link_outro_html;
    breadboard_page = link_into_html + inactive_html + breadboard_page_html + link_outro_html;
    Dashboard_page = link_into_html + inactive_html + Dashboard_html + link_outro_html;
}
else if(document.URL.includes("Breadboard.html")){
    home_link = link_into_html + inactive_html + home_link_html + link_outro_html;
    map_link = link_into_html + inactive_html + map_link_html + link_outro_html;
    Graph_link = link_into_html + inactive_html + Graph_link_html + link_outro_html;
    Housing_page = link_into_html + inactive_html + Housing_page_html + link_outro_html;
    breadboard_page = link_into_html + active_html + breadboard_page_html + link_outro_html;
    Dashboard_page = link_into_html + inactive_html + Dashboard_html + link_outro_html;
}
else if(document.URL.includes("Dashboard.html")){
    home_link = link_into_html + inactive_html + home_link_html + link_outro_html;
    map_link = link_into_html + inactive_html + map_link_html + link_outro_html;
    Graph_link = link_into_html + inactive_html + Graph_link_html + link_outro_html;
    Housing_page = link_into_html + inactive_html + Housing_page_html + link_outro_html;
    breadboard_page = link_into_html + inactive_html + breadboard_page_html + link_outro_html;
    Dashboard_page = link_into_html + active_html + Dashboard_html + link_outro_html;
}
else{
    home_link = link_into_html + inactive_html + home_link_html + link_outro_html;
    map_link = link_into_html + inactive_html + map_link_html + link_outro_html;
    Graph_link = link_into_html + inactive_html + Graph_link_html + link_outro_html;
    Housing_page = link_into_html + inactive_html + Housing_page_html + link_outro_html;
    breadboard_page = link_into_html + inactive_html + breadboard_page_html + link_outro_html;
    Dashboard_page = link_into_html + inactive_html + Dashboard_html + link_outro_html;
};

Main_Menu = '<div id="title_box"><h1>&nbsp;LoRaWAN Mesh Network</h1></div><div id="Main_menu_box"><div id="Menu">' + home_link + breadboard_page + Housing_page + Dashboard_page + map_link + Graph_link + real_website + '</div></div>';
document.getElementById('Main_Menu').innerHTML = Main_Menu;
