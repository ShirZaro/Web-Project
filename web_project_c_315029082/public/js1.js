

function start(){
    // const btn1 = document.getElementById('GoButton');
    // btn1.addEventListener('click',setID() )
    MyGreeting();
}

// function setID(){
//     console.log("HIIIIIIIIIII" );
//     var myID =  document.getElementById('SearchID').value;
//     console.log("myID",myID );
//     const id = myID
//     console.log("id",id );
// }


function d1(){
    var Squat_Weight_1=document.getElementById('Squat_Weight_1').innerText;
    var Deadlift_Weight_1 =document.getElementById('Deadlift_Weight_1').innerText;
    var Squat_Weight_2=document.getElementById('Squat_Weight_2').innerText;
    var Deadlift_Weight_2=document.getElementById('Deadlift_Weight_2').innerText;
    var Squat_Weight_3=document.getElementById('Squat_Weight_3').innerText;
    var Deadlift_Weight_3=document.getElementById('Deadlift_Weight_3').innerText;
    var Squat_Weight_4=document.getElementById('Squat_Weight_4').innerText;
    var Deadlift_Weight_4=document.getElementById('Deadlift_Weight_4').innerText;

    var Rows = document.getElementsByTagName('tr');
    var user = document.getElementById('myHeader').innerText;
    var x= Rows.length;
    console.log(x);
    var inputs = document.getElementsByTagName("INPUT");
    var i =2;
    console.log("id inside d1", user );
    if (user !='315'){
    while(i<inputs.length){
        console.log(i);
        inputs[i].disabled = true;
        inputs[i+1].disabled = true;
        inputs[i+2].disabled = true;
        i=i+5;
    }}
    var a = 0;
    var b = "";
    if (Squat_Weight_1 == Squat_Weight_2 && Squat_Weight_2 != ""){ a = a+1; b="Squat"; };
    if (Squat_Weight_2 == Squat_Weight_3 && Squat_Weight_3 != ""){ a = a+1; b="Squat";};
    if (Squat_Weight_3 == Squat_Weight_4 && Squat_Weight_4 != ""){ a = a+1; b="Squat";};
    if (Deadlift_Weight_1 == Deadlift_Weight_2 && Deadlift_Weight_2 != ""){ a = a+1; b="Deadlift";};
    if (Deadlift_Weight_2 == Deadlift_Weight_3 && Deadlift_Weight_3 != ""){ a = a+1; b="Deadlift";};
    if (Deadlift_Weight_3 == Deadlift_Weight_4 && Deadlift_Weight_4 != ""){ a = a+1; b="Deadlift";};
    if (a >0 ) {
        console.log("aaaaa",a);
        alert("You are too GOOD!! you should upload weigth in ",b);
    }
}

function MyFunction(){
    var Squat_Weight_1=document.getElementById('Squat_Weight_1').innerText;
    var Deadlift_Weight_1 =document.getElementById('Deadlift_Weight_1').innerText;
    var Squat_Weight_2=document.getElementById('Squat_Weight_2').innerText;
    var Deadlift_Weight_2=document.getElementById('Deadlift_Weight_2').innerText;
    var Squat_Weight_3=document.getElementById('Squat_Weight_3').innerText;
    var Deadlift_Weight_3=document.getElementById('Deadlift_Weight_3').innerText;
    var Squat_Weight_4=document.getElementById('Squat_Weight_4').innerText;
    var Deadlift_Weight_4=document.getElementById('Deadlift_Weight_4').innerText;

    const ctx = document.getElementById('curve_chart').getContext('2d');
    const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4'],
        datasets: [{
            label: 'My Squat',
            data: [Squat_Weight_1,
                Squat_Weight_2, Squat_Weight_3, Squat_Weight_4],
            borderColor: "red",
            fill: false,
            borderWidth: 1
        },{
            label: 'My Deadlift',
            data: [Deadlift_Weight_1,
                Deadlift_Weight_2, Deadlift_Weight_3, Deadlift_Weight_4],
            borderColor: "blue",
            fill: false,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});}





//     google.charts.load('current', {'packages':['corechart']});
//     google.charts.setOnLoadCallback(drawChart);

//     function drawChart() {
//       var data = google.visualization.arrayToDataTable([
//         ['Week', 'Squat', 'Deadlit'],
//         ['1',  33,      45],
//         ['2',  34,      45],
//         ['3',  34,       45],
//         ['4',  36,      48],
//         ['5',  39,      50]
//       ]);

//       var options = {
//         title: 'MY Performance',
//         curveType: 'function',
//         legend: { position: 'bottom' }
//       };

//       var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

//       chart.draw(data, options);
      
//     }
// }




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