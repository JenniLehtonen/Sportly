function drawchart(number){
    let ctx = document.getElementById("myChart").getContext('2d');
	if(window.bar != undefined) 
	window.bar.destroy(); 
    window.bar = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [{
            label: "hours",
            data: [mon, tue, wed, thu, fri, sat, sun],
            backgroundColor: "rgba(26, 188, 156, 0.61)",
		    borderColor: "#1abc9c",
			hoverBackgroundColor: "rgba(26, 188, 156, 0.79)",
			hoverBorderColor: "rgba(26, 188, 156, 1)",
            borderWidth: 1
        }]
    },

    options: {
		maintainAspectRatio: false,
       title: {
            display: true,
            text: 'My weekly sport routine'
        },
      legend: {
    	display: false
    },
	responsive: true,
        scales: {
            yAxes: [{
                barThickness: 59,
                ticks: {
                    beginAtZero:true,
					stepSize: 0.5
                }
            }],
            xAxes: [{
                barThickness: 36
            }]
        }
   }
});
  
if (number == 2){  //jos numero on 2, silloin on klikattu reset-painiketta ja kutsutaan reset-funktiota, joka nollaa kaavion arvot ja tyhjentää local storagen
  reset(window.bar);
} else{  //jos numero on jokin muu, kutsutaan addExercise-funktiota, jossa arvot laitetaan kaavioon ja local storageen
  addExercise(window.bar); 
}
 
}


function addExercise(chart){ //Haetaan kaavioon arvot input-elementeistä

	 let LSmon=document.getElementById("mon").value;
	 let LStue=document.getElementById("tue").value;
	 let LSwed=document.getElementById("wed").value;
	 let LSthu=document.getElementById("thu").value;
	 let LSfri=document.getElementById("fri").value;
	 let LSsat=document.getElementById("sat").value;
	 let LSsun=document.getElementById("sun").value;
	
	 if(LSmon != ""){      //Jos arvo ei ole tyhjä, laitetaan arvo local storageen
		 localStorage.setItem("Monday", LSmon);
	 } if(LStue != ""){
		 localStorage.setItem("Tuesday", LStue);
	 } if(LSwed != ""){
		 localStorage.setItem("Wednesday", LSwed);
	 } if(LSthu != ""){
		 localStorage.setItem("Thursday", LSthu);
	 } if(LSfri != ""){
		 localStorage.setItem("Friday", LSfri);
	 } if(LSsat != ""){
		 localStorage.setItem("Saturday", LSsat);
	 } if(LSsun != ""){
		 localStorage.setItem("Sunday", LSsun);
	 } 
	 

     chart.data.datasets[0].data[0] = localStorage.getItem("Monday");  //haetaan local storagesta arvot ja asetetaan ne kaavion arvoiksi
     chart.data.datasets[0].data[1] = localStorage.getItem("Tuesday");  
     chart.data.datasets[0].data[2] = localStorage.getItem("Wednesday");
     chart.data.datasets[0].data[3] = localStorage.getItem("Thursday");   
     chart.data.datasets[0].data[4] = localStorage.getItem("Friday");
     chart.data.datasets[0].data[5] = localStorage.getItem("Saturday");
     chart.data.datasets[0].data[6] = localStorage.getItem("Sunday");
	 chart.update({
       duration :0
     });
}  

function reset(chart){ 
	clear_list();  //kutsutaan funktiota local storagen arvojen tyhjentämiseksi
	
	chart.data.datasets[0].data[0] = 0; 
	chart.data.datasets[0].data[1] = 0; 
	chart.data.datasets[0].data[2] = 0; //nollataan kaavion arvot
	chart.data.datasets[0].data[3] = 0;
	chart.data.datasets[0].data[4] = 0;
	chart.data.datasets[0].data[5] = 0;   
	chart.data.datasets[0].data[6] = 0; 
	chart.update({
	duration: 0
	});
	
}

function clear_list() {  //Tyhjennetään local storage
	window.localStorage.clear();
}