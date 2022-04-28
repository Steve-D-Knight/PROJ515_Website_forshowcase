for(i = 0; i <= node.length-3; i++){
    var marker = new L.marker([node[i].Latitude, node[i].Longitude], {icon: BluePin}).addTo(map);
    marker.valueOf()._icon.style.filter = Hue_calculate(node.length,i);
    marker.bindPopup(node[i].name + "<br />temperature " + node[i].Temperature + "&deg; C<br />Humidity " + node[i].Humidity + "%");
    
};

function Hue_calculate(total_values, This_value){
    var angle = 360 / total_values;
    var output = 0 + This_value * angle;
    return 'hue-rotate(' + output + 'deg)';
};

function convertRange(value, oldRangeMIN, oldRangeMAX, newRangeMIN, newRangeMAX){
    return ((value - oldRangeMIN) * (newRangeMAX - newRangeMIN)) / (oldRangeMAX - oldRangeMIN) + newRangeMIN;
};

function colour_mapping_temperature(CM_temperature){
    if(CM_temperature > 40){
        return "rgb(255, 0, 0)"; 
    }
    else if(CM_temperature >= 30 && CM_temperature < 40){
        var range30240 = convertRange(CM_temperature, 40,30,0,255);
        return "rgb(255 ," + range30240 + ", 0)"; 
    }
    else if(CM_temperature >= 20 && CM_temperature < 30){
        var range20230 = convertRange(CM_temperature, 20,30,0,255);
        return "rgb(" + range20230 + ", 255, 0)"; 
    }
    else if(CM_temperature >= 10 && CM_temperature < 20) {
        var range10220 = convertRange(CM_temperature, 20,10,0,255);
        return "rgb(0, 255, " + range10220 + ")"; 
    } 
    else if(CM_temperature >= 0 && CM_temperature < 10) {
        var range0210 = convertRange(CM_temperature, 0,10,0,255);
        return "rgb(0, "+ range0210 + ",255)"; 
    }
    else {
        return "rgb(0, 0, 255)"; 
    }
};
function colour_mapping_Humidity(CM_temperature){
    if(CM_temperature > 80){
        return "rgb(255, 0, 0)"; 
    }
    else if(CM_temperature >= 64 && CM_temperature < 80){
        var range30240 = convertRange(CM_temperature, 84,64,0,255);
        return "rgb(255 ," + range30240 + ", 0)"; 
    }
    else if(CM_temperature >= 48 && CM_temperature < 64){
        var range20230 = convertRange(CM_temperature, 48,64,0,255);
        return "rgb(" + range20230 + ", 255, 0)"; 
    }
    else if(CM_temperature >= 32 && CM_temperature < 48) {
        var range10220 = convertRange(CM_temperature, 64,32,0,255);
        return "rgb(0, 255, " + range10220 + ")"; 
    } 
    else if(CM_temperature >= 16 && CM_temperature < 32) {
        var range0210 = convertRange(CM_temperature, 16,32,0,255);
        return "rgb(0, "+ range0210 + ",255)"; 
    }
    else {
        return "rgb(0, 0, 255)"; 
    }
};
var polygon = new L.rectangle ([    
    [node[MAX_index].Latitude, node[MAX_index].Longitude],
    [node[MIN_index].Latitude, node[MIN_index].Longitude],
    
], {
    color: 'black',
    fillColor: 'lightblue',
    fillOpacity: 0,
    weight: 2
}).addTo(map); 

var resolution = 25.0;
var resolution_Latitude = (node[MAX_index].Latitude - node[MIN_index].Latitude)/resolution;
var resolution_Longitude = (node[MAX_index].Longitude - node[MIN_index].Longitude)/resolution;
var grid_points_temperature = Array(resolution+5).fill(null).map(() => Array(resolution+5).fill(-300));
var grid_points_humidity = Array(resolution+5).fill(null).map(() => Array(resolution+5).fill(-300));
var node_points = Array(resolution+5).fill(null).map(() => Array(resolution+5).fill("empty"));
var temp_heatmappolygon = Array(resolution+5).fill(null).map(() => Array(resolution+5).fill(0))
var humi_heatmappolygon = Array(resolution+5).fill(null).map(() => Array(resolution+5).fill(0))

for(i=0; i<=resolution+1; i++){
    for(j=0; j<=resolution+1; j++){
        for(k = 0; k <= node.length-3; k++){
            if(node[k].Latitude <= (node[MAX_index].Latitude - resolution_Latitude*(i-1))){
                if(node[k].Latitude  >= (node[MAX_index].Latitude - resolution_Latitude*(i))){
                    if(node[k].Longitude >= (node[MAX_index].Longitude - resolution_Longitude*(j-1))){
                        if(node[k].Longitude  <= (node[MAX_index].Longitude - resolution_Longitude*(j))){
                            grid_points_temperature[i][j] = node[k].Temperature;
                            grid_points_humidity[i][j] = node[k].Humidity;
                            node_points[i][j] = "Node";
                        };
                    };
                };
            };
        };
    };
};
for(i=0; i<=resolution+3; i++){
    for(j=0; j<=resolution+3; j++){
        if(grid_points_temperature[i][j] == -300){
                grid_points_temperature[i][j] = average_temp;
        };
        if(grid_points_humidity[i][j] == -300){                
            grid_points_humidity[i][j] = average_humi;
        };
    };
};
for(k=0; k<=5000; k++){
    for(i=1; i<=resolution+1; i++){
        for(j=1; j<=resolution+1; j++){
            if(node_points[i][j] != "Node"){
                grid_points_temperature[i][j] = (grid_points_temperature[i+1][j] + grid_points_temperature[i-1][j] + grid_points_temperature[i][j+1] + grid_points_temperature[i][j-1])/4.0;
                grid_points_humidity[i][j] = (grid_points_humidity[i+1][j] + grid_points_humidity[i-1][j] + grid_points_humidity[i][j+1] + grid_points_humidity[i][j-1])/4.0;
            };
        };
    };
};

for(i=0; i<=resolution+1; i++){
    for(j=0; j<=resolution+1; j++){
        
        temp_heatmappolygon[i][j] = new L.rectangle ([    
            [node[MAX_index].Latitude - resolution_Latitude*(i-1), node[MAX_index].Longitude - resolution_Longitude*(j-1)],
            [node[MAX_index].Latitude - resolution_Latitude*(i), node[MAX_index].Longitude - resolution_Longitude*(j)],
        ], {
            color: 'black',
            fillColor: colour_mapping_temperature(grid_points_temperature[i][j]),
            fillOpacity: 0.3,
            weight: 0.1,
            //display: none,
        });
        temp_heatmappolygon[i][j].bindTooltip("(X: " + i + " , Y: " + j + ")<br />Temperature:" + grid_points_temperature[i][j].toFixed(2) + "&deg;C<br />Humidity: " + grid_points_humidity[i][j].toFixed(2) + "%");
    };
};
for(i=0; i<=resolution+1; i++){
    for(j=0; j<=resolution+1; j++){
        
        humi_heatmappolygon[i][j] = new L.rectangle ([    
            [node[MAX_index].Latitude - resolution_Latitude*(i-1), node[MAX_index].Longitude - resolution_Longitude*(j-1)],
            [node[MAX_index].Latitude - resolution_Latitude*(i), node[MAX_index].Longitude - resolution_Longitude*(j)],
        ], {
            color: 'black',
            fillColor: colour_mapping_Humidity(grid_points_humidity[i][j]),
            fillOpacity: 0.3,
            weight: 0.1,
            //display: none,
        });
        humi_heatmappolygon[i][j].bindTooltip("(X: " + i + " , Y: " + j + ")<br />Temperature:" + grid_points_temperature[i][j].toFixed(2) + "&deg;C<br />Humidity: " + grid_points_humidity[i][j].toFixed(2) + "%");
    };
};