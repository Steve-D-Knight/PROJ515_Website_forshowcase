// var URL = window.location.href;
var Main_Menu = 'place holder';

var link_into_html = '<div><form><button ';
var active_html = 'id="menu_active" class="button-58" ';
var inactive_html = 'id="menu_inactive" class="button-58" ';
var link_outro_html = '</button></form></div>';

var home_link_html = 'formaction="index.html">Dashboard Mockup';
var map_link_html = 'formaction="map.html">Map Mockup';
var Graph_link_html = 'formaction="Graph.html">Graph Mockup';

var home_link = link_into_html + inactive_html + home_link_html + link_outro_html;
var map_link = link_into_html + inactive_html + map_link_html + link_outro_html;
var Graph_link = link_into_html + inactive_html + Graph_link_html + link_outro_html;


var Health_bar = '<div id="Healthbar"><div id="Health_pointer">&nbsp;</div></div>';

function Health_bar_function(value, width){
    Health_bar = '<div id="Healthbar" style="padding: 0px ' + (width * (1 - (value / 100.0))) + 'px 0px ' + (width * ((value / 100.0))) + 'px;"><div id="Health_pointer">&nbsp;</div></div>';
    return Health_bar;
};

if(document.URL.includes("index.html")){
    home_link = link_into_html + active_html + home_link_html + link_outro_html;
    map_link = link_into_html + inactive_html + map_link_html + link_outro_html;
    Graph_link = link_into_html + inactive_html + Graph_link_html + link_outro_html;
}
else if(document.URL.includes("map.html")){
    home_link = link_into_html + inactive_html + home_link_html + link_outro_html;
    map_link = link_into_html + active_html + map_link_html + link_outro_html;
    Graph_link = link_into_html + inactive_html + Graph_link_html + link_outro_html;
}
else if(document.URL.includes("Graph.html")){
    home_link = link_into_html + inactive_html + home_link_html + link_outro_html;
    map_link = link_into_html + inactive_html + map_link_html + link_outro_html;
    Graph_link = link_into_html + active_html + Graph_link_html + link_outro_html;
}
else{
    home_link = link_into_html + inactive_html + home_link_html + link_outro_html;
    map_link = link_into_html + inactive_html + map_link_html + link_outro_html;
    Graph_link = link_into_html + inactive_html + Graph_link_html + link_outro_html;
};

Main_Menu = '<div id="Main_menu_box"><div id="Menu">' + home_link + map_link + Graph_link + '</div><div id="Healthbar_container"></div></div>';
document.getElementById('Main_Menu').innerHTML = Main_Menu;
