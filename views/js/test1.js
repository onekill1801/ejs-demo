var limit = 50000;
var y = 100;
var data = [];
var dataPoints = [];
for (var i = 0; i < limit; i += 1) {
    y += Math.round(Math.random() * 10 - 5);
    dataPoints.push({
        x: i,
        y: y
    });
}

var dataPoints1 = [
  { x: 1501048673000, y: 35.939},
  { x: 1501052273000, y: 40.896},
  { x: 1501055873000, y: 56.625}];

function renderNhietDo(data) {
  var chart = new CanvasJS.Chart("nhietdo", {
    zoomEnabled: true,
    animationEnabled: true,
    title: {
        text: "Try Zooming - Panning"
    },
    axisY: {
        lineThickness: 1
    },
    data: [{
      type: "line",
      dataPoints: data
    }]
  });
  chart.render();
};

function renderDoAm(dataPoints) {
  var chart1 = new CanvasJS.Chart("doam", {
    animationEnabled: true,
    title: {
        text: "Hourly Average CPU Utilization"
    },
    axisX: {
        title: "Time"
    },
    axisY: {
        title: "Percentage",
        suffix: "%",
        includeZero: true
    },
    data: [{
        type: "line",
        name: "CPU Utilization",
        connectNullData: true,
        //nullDataLineDashType: "solid",
        xValueType: "dateTime",
        xValueFormatString: "DD MMM hh:mm TT",
        yValueFormatString: "#,##0.##\"%\"",
        dataPoints: dataPoints
    }]
  });
  chart1.render();
}

// window.onload = function() { 
//   renderNhietDo(dataPoints);
//   renderDoAm(dataPoints1);
// };

function getdata(){
  $.ajax({
      url:'/getDoAm',
      method:'get',
      dataType:'json',
      success:function(response){
        console.log(response);
        dataPoints1.push({ x: 1501056073000, y: 66.625});
        renderDoAm(dataPoints1);
        if(response.msg=='success') {
          console.log(response);
        }
      },
      error:function(response){
          alert('server error');
      }
  });
}

$(document).ready(function() {  
  // alert('application started');  
  getdata();
});