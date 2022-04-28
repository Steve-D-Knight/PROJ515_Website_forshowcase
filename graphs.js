// using chart.js
var labels = [
  Graph_test_data[0].Date_time,
  Graph_test_data[1].Date_time,
  Graph_test_data[2].Date_time,
  Graph_test_data[3].Date_time,
  Graph_test_data[4].Date_time,
  Graph_test_data[5].Date_time,
  Graph_test_data[6].Date_time,
  Graph_test_data[7].Date_time,
  Graph_test_data[8].Date_time,
  Graph_test_data[9].Date_time
];

var data = {
  labels: labels,
    datasets: [{
      label: 'test graph',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [   Graph_test_data[0].Temperature, 
                Graph_test_data[1].Temperature, 
                Graph_test_data[2].Temperature, 
                Graph_test_data[3].Temperature, 
                Graph_test_data[4].Temperature, 
                Graph_test_data[5].Temperature,
                Graph_test_data[6].Temperature,
                Graph_test_data[7].Temperature,
                Graph_test_data[8].Temperature,
                Graph_test_data[9].Temperature
    ]
  }]
};
function LOAD_CHART_testchart(){ 
  var config = {
      type: 'line',
      data: data,
      options: {}
    };

  var testChart = new Chart(
    document.getElementById('testChart'),
    config
  );
};
function hide_chart_testchart(){
  // testChart.chart.destroy();
};
LOAD_CHART_testchart();