window.onload = function() {
  var dataPointsRes = [{
          x: new Date(2018, 11, 24, 10, 33, 30, 0),
          y: 31.6
      },
      {
          x: new Date(2018, 11, 24, 10, 34, 30, 0),
          y: 10.9
      },
      {
          x: new Date(2018, 11, 24, 10, 35, 30, 0),
          y: 29
      },
      {
          x: new Date(2018, 11, 24, 10, 36, 30, 0),
          y: 29
      },
      {
          x: new Date(2018, 11, 24, 10, 37, 30, 0),
          y: 31
      },
      {
          x: new Date(2018, 11, 24, 10, 38, 30, 0),
          y: 30
      },
      {
          x: new Date(2018, 11, 24, 10, 39, 30, 0),
          y: 29
      }
  ];
  renderChart(dataPointsRes);
}

function renderChart(dataPointsRes) {
  var data = [{
      name: "Myrtle Beach",
      type: "spline",
      yValueFormatString: "#0.## °C",
      showInLegend: true,
      dataPoints: dataPointsRes
  }];


  var options = {
      animationEnabled: true,
      title: {
          text: "List of users"
      },
      axisX: {
          valueFormatString: "mm:ss"
      },
      axisY: {
          title: "Temperature (in °C)",
          suffix: " °C"
      },
      legend: {
          cursor: "pointer",
          fontSize: 16,
          itemclick: toggleDataSeries
      },
      toolTip: {
          shared: true
      },
      data: data
  };

  var chart = new CanvasJS.Chart("chartContainer", options);
  chart.render();
}

function toggleDataSeries(e) {
  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
  } else {
      e.dataSeries.visible = true;
  }
  chart.render();
}