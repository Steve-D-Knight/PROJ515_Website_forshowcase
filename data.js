var node = [
    {name: "node 1", Latitude:50.53900552836232,   Longitude:-4.335507477915251,   Temperature: 22.8, Humidity: 14.7, Pressure: 1010},
    {name: "node 2", Latitude:50.53772297111132,   Longitude:-4.335097810556772,   Temperature: 23.7, Humidity: 52.3, Pressure: 1011},
    {name: "node 3", Latitude:50.536276436123984,  Longitude:-4.33471848892855,    Temperature: -5.5, Humidity: 54.1, Pressure: 1008},
    {name: "node 4", Latitude:50.53743366766271,   Longitude:-4.3323515219684445,  Temperature: 22.5, Humidity: 51.2, Pressure: 1002},
    {name: "node 5", Latitude:50.53854265457947,   Longitude:-4.3337474255603015,  Temperature: 21.9, Humidity: 56.8, Pressure: 1015},
    {name: "node 6", Latitude:50.54026876494557,   Longitude:-4.332654979271021,   Temperature: 22.7, Humidity: 58.7, Pressure: 1020},
    {name: "node 7", Latitude:50.539584114202924,  Longitude:-4.3316535701725165,  Temperature: 21.1, Humidity: 97.6, Pressure: 1014},
    {name: "node 8", Latitude:50.54000840597513,   Longitude:-4.330181802255014,   Temperature: 56.3, Humidity: 52.4, Pressure: 1030},
    {name: "node 9", Latitude:50.53869694634514,   Longitude:-4.329514196189344,   Temperature: 25.4, Humidity: 54.3, Pressure: 1012},
];

var Graph_test_data = [
    {name: "node 1", Latitude:50.53900552836232,   Longitude:-4.335507477915251,   Temperature: 22.8, Humidity: 14.7, Date_time: 202201281807},
    {name: "node 1", Latitude:50.53900552836232,   Longitude:-4.335507477915251,   Temperature: 21.8, Humidity: 14.7, Date_time: 202201281806},
    {name: "node 1", Latitude:50.53900552836232,   Longitude:-4.335507477915251,   Temperature: 26.8, Humidity: 14.7, Date_time: 202201281805},
    {name: "node 1", Latitude:50.53900552836232,   Longitude:-4.335507477915251,   Temperature: 28.8, Humidity: 14.7, Date_time: 202201281804},
    {name: "node 1", Latitude:50.53900552836232,   Longitude:-4.335507477915251,   Temperature: 21.8, Humidity: 14.7, Date_time: 202201281803},
    {name: "node 1", Latitude:50.53900552836232,   Longitude:-4.335507477915251,   Temperature: 25.8, Humidity: 14.7, Date_time: 202201281802},
    {name: "node 1", Latitude:50.53900552836232,   Longitude:-4.335507477915251,   Temperature: 26.8, Humidity: 14.7, Date_time: 202201281801},
    {name: "node 1", Latitude:50.53900552836232,   Longitude:-4.335507477915251,   Temperature: 27.8, Humidity: 14.7, Date_time: 202201281800},
    {name: "node 1", Latitude:50.53900552836232,   Longitude:-4.335507477915251,   Temperature: 28.8, Humidity: 14.7, Date_time: 202201281759},
    {name: "node 1", Latitude:50.53900552836232,   Longitude:-4.335507477915251,   Temperature: 23.8, Humidity: 14.7, Date_time: 202201281758}
];

node.push({name: "MAX_latlon", Latitude:node[0].Latitude,   Longitude:node[0].Longitude});
node.push({name: "MIN_latlon", Latitude:node[0].Latitude,   Longitude:node[0].Longitude});
var MAX_index;
var MIN_index;
var DEBUG = 'test';
