
var DASHBOARD = 'place holder';
var average_temp = 0;
var average_humi = 0;
var average_pres = 0;

for(i = 0; i <= node.length-4; i++){
    average_temp = average_temp + node[i].Temperature;
    average_humi = average_humi + node[i].Humidity;
    average_pres = average_pres + node[i].Pressure;
};
average_temp = average_temp / (node.length-3);
average_humi = average_humi / (node.length-3);
average_pres = average_pres / (node.length-3);

var dashboard_block_temp = '<div id="dashboard_innerbox"><h3>Temperature</h3>&osol; ' + parseFloat(average_temp).toFixed(2) + '&deg;C<br /><br />' + Health_bar_function(30, 100) + '</div>';
var dashboard_block_humi = '<div id="dashboard_innerbox"><h3>Humidity</h3>&osol; ' + parseFloat(average_humi).toFixed(2)+ '%<br /><br />' + Health_bar_function(80, 100) + '</div>';
var dashboard_block_pres = '<div id="dashboard_innerbox"><h3>Pressure</h3>&osol; ' + parseFloat(average_pres).toFixed(2)+ ' hPa<br /><br />' + Health_bar_function(80, 100) + '</div>';
var dashboard_block_environment = '<div id="dashboard_outerbox"><h2>Environmental sensors</h2><div id="dashboard_innerbox_container">' + dashboard_block_temp + dashboard_block_humi + dashboard_block_pres + '</div></div>'

DASHBOARD = '<div id="dashboard_panel">' + dashboard_block_environment + '</div><div id="whitespace"><br />This is a demo of the dashboard using dummy data</div>';
document.getElementById('DASHBOARD').innerHTML = DASHBOARD;
