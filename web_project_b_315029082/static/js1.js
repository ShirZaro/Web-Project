function d1(){
    var Rows = document.getElementsByTagName('tr');
    var x= Rows.length;
    console.log(x);

    var inputs = document.getElementsByTagName("INPUT");
    var i =0;
        while(i<inputs.length){
            console.log(i);
            inputs[i].disabled = true;
            inputs[i+1].disabled = true;
            inputs[i+2].disabled = true;
            i=i+5;
        }

        alert("You are too GOOD!! you should upload weigth:)")


}
function MyFunction(){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Week', 'Squat', 'Deadlit'],
        ['1',  33,      45],
        ['2',  34,      45],
        ['3',  34,       45],
        ['4',  36,      48],
        ['5',  39,      50]
      ]);

      var options = {
        title: 'MY Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

      chart.draw(data, options);
      
    }
}




function  MyGreeting() {
console.log("im in my greeting");
    var d = new Date;
    var t = d.getUTCHours();
    if (t < 12) {
        document.getElementById("demo").innerHTML = "good morning";
    } else if (t < 18) {
        document.getElementById("demo").innerHTML = "good afternoon";
    } else {
        document.getElementById("demo").innerHTML = "good evening"
    };
}