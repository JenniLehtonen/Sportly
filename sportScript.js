function loadJSON() {
    $.ajax({
             url: 'sportJson.json',
             cache: false
     }).done(function(data) {
         console.log("done");
         showSportInformation(data);        
     }).fail(function() {
         console.log("error");
     }).always(function() {
         console.log("complete");
     });
 } 
 function showSportInformation(data){
     var sportValue=document.getElementById("sport").value;
    $.each(data.sportInformation, function(index, sport) {
        var tyyppi=sport.SportType;
          if (tyyppi==sportValue){  //Jos JSON-tiedoston arvo vastaa syöttökentän arvoa, haetaan JSON-tiedostosta sopiva tulos
             document.getElementById("sportResult1").innerHTML="<p>"+sport.Benefits+"</p>";
             document.getElementById("sportResult2").innerHTML="<img src="+sport.Image+">";
          }
     });
 
 }  
        
 
 
 var football = L.layerGroup();  //Kartan tasot
 var golf = L.layerGroup();
 var basketball = L.layerGroup();
 var volleyball = L.layerGroup();
 var cycling = L.layerGroup();
 var riding = L.layerGroup();
 var gymnastics = L.layerGroup();
 var judo = L.layerGroup();
 var rowing = L.layerGroup();
 var swimming = L.layerGroup();
 var tennis = L.layerGroup();
 var archery = L.layerGroup();
 
 var mymap = L.map('mapid', {
     center: [61.182214, 25.062590],
     zoom: 7,
     layers: [gymnastics]  //oletustaso
 });
 
 var overlays = { // Kartan tasot
     "Gymnastics" : gymnastics,
     "Swimming" : swimming,
     "Basketball" : basketball,
     "Volleyball" : volleyball,
     "Football" : football,
     "Archery" : archery,
     "Cycling" : cycling,
     "Rowing" : rowing,
     "Tennis" : tennis,
     "Riding" : riding,
     "Golf" : golf,
     "Judo" : judo
 };
 
 L.control.layers(overlays).addTo(mymap); //Tasojen "ohjain"
 
 L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVubmkxMjM0NSIsImEiOiJja2JuZ2N3N2UwNnc3MnFwbmY5NzRwdWwxIn0.UkX_nmKzMyPubx66rWw1PA', {
             attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
             maxZoom: 18,
             id: 'jenni12345/ckdfw8kyj0ver1ilbxefm71za',
             tileSize: 512,
             zoomOffset: -1,
             accessToken: 'pk.eyJ1IjoiamVubmkxMjM0NSIsImEiOiJja2JuZ2N3N2UwNnc3MnFwbmY5NzRwdWwxIn0.UkX_nmKzMyPubx66rWw1PA'
 }).addTo(mymap);
 
 var footballIcon = L.icon({   //Kartan ikonit-->
     iconUrl: 'mapIcons/football-ball.png', 
     iconSize:     [32, 32], // size
     iconAnchor:   [16, 32], // point of the icon which will correspond to marker's location
     popupAnchor:  [-32, -32] // point from which the popup should open relative to the iconAnchor
 });
 var golfIcon = L.icon({
     iconUrl: 'mapIcons/golf-ball.png', 
     iconSize:     [32, 32], 
     iconAnchor:   [16, 32], 
     popupAnchor:  [-32, -32] 
 });
 var basketballIcon = L.icon({
     iconUrl: 'mapIcons/basketball.png', 
     iconSize:     [32, 32], 
     iconAnchor:   [16, 32], 
     popupAnchor:  [-32, -32] 
 });
 var volleyballIcon = L.icon({
     iconUrl: 'mapIcons/volleyball.png', 
     iconSize:     [32, 32], 
     iconAnchor:   [16, 32], 
     popupAnchor:  [-32, -32] 
 });
 var cyclingIcon = L.icon({
     iconUrl: 'mapIcons/cycling.png', 
     iconSize:     [32, 32], 
     iconAnchor:   [16, 32], 
     popupAnchor:  [-32, -32] 
 });
 var ridingIcon = L.icon({
     iconUrl: 'mapIcons/horse.png', 
     iconSize:     [32, 32], 
     iconAnchor:   [16, 32], 
     popupAnchor:  [-32, -32] 
 });
 var gymnasticsIcon = L.icon({
     iconUrl: 'mapIcons/gymnastics.png', 
     iconSize:     [32, 32], 
     iconAnchor:   [16, 32], 
     popupAnchor:  [-32, -32] 
 });
 var judoIcon = L.icon({
     iconUrl: 'mapIcons/judo.png', 
     iconSize:     [32, 32], 
     iconAnchor:   [16, 32], 
     popupAnchor:  [-32, -32] 
 });
 var rowingIcon = L.icon({
     iconUrl: 'mapIcons/kayak.png', 
     iconSize:     [32, 32], 
     iconAnchor:   [16, 32], 
     popupAnchor:  [-32, -32] 
 });
 var swimmingIcon = L.icon({
     iconUrl: 'mapIcons/hot-pool.png', 
     iconSize:     [32, 32], 
     iconAnchor:   [16, 32], 
     popupAnchor:  [-32, -32] 
 });
 var tennisIcon = L.icon({
     iconUrl: 'mapIcons/tennis.png', 
     iconSize:     [32, 32], 
     iconAnchor:   [16, 32], 
     popupAnchor:  [-32, -32] 
 });
 var archeryIcon = L.icon({
     iconUrl: 'mapIcons/target.png', 
     iconSize:     [32, 32], 
     iconAnchor:   [16, 32], 
     popupAnchor:  [-32, -32] 
 });
 
 $(document).ready(function(){
 $.ajax({
             url: 'sportMap.json',
             cache: false
     }).done(function(data) {
         console.log("done");
         map(data);        
     }).fail(function() {
         console.log("error");
     }).always(function() {
         console.log("complete");
     });
 }); 
 
 function map(data){  //käydään läpi sportMap.json tiedostoa ja tehdään markerit karttaan
         $.each(data.sports, function(index, sportChoice) {
             var sport=sportChoice.sport;
            if (sport=="Football"){
                 var marker = L.marker([sportChoice.lat, sportChoice.lng], {icon: footballIcon}).addTo(football);
             } else if (sport=="Golf"){
                 var marker = L.marker([sportChoice.lat, sportChoice.lng], {icon: golfIcon}).addTo(golf);
             } else if (sport=="Basketball"){
                 var marker = L.marker([sportChoice.lat, sportChoice.lng], {icon: basketballIcon}).addTo(basketball);
             } else if (sport=="Volleyball"){
                 var marker = L.marker([sportChoice.lat, sportChoice.lng], {icon: volleyballIcon}).addTo(volleyball);
             } else if (sport=="Cycling"){
                 var marker = L.marker([sportChoice.lat, sportChoice.lng], {icon: cyclingIcon}).addTo(cycling);
             } else if (sport=="Riding"){
                 var marker = L.marker([sportChoice.lat, sportChoice.lng], {icon: ridingIcon}).addTo(riding);
             } else if (sport=="Gymnastics"){
                 var marker = L.marker([sportChoice.lat, sportChoice.lng], {icon: gymnasticsIcon}).addTo(gymnastics);
             }  else if (sport=="Judo"){
                 var marker = L.marker([sportChoice.lat, sportChoice.lng], {icon: judoIcon}).addTo(judo);
             } else if (sport=="Rowing"){
                 var marker = L.marker([sportChoice.lat, sportChoice.lng], {icon: rowingIcon}).addTo(rowing);
             } else if (sport=="Swimming"){
                 var marker = L.marker([sportChoice.lat, sportChoice.lng], {icon: swimmingIcon}).addTo(swimming);
             } else if (sport=="Tennis"){
                 var marker = L.marker([sportChoice.lat, sportChoice.lng], {icon: tennisIcon}).addTo(tennis);
             } else if (sport=="Archery"){
                 var marker = L.marker([sportChoice.lat, sportChoice.lng], {icon: archeryIcon}).addTo(archery);
             }
             marker.bindPopup("<h1>"+sportChoice.club+"</h1>"+"<br>"+"Address: "+sportChoice.address+"<br>"+"Phone number: "+sportChoice.phoneNumber+"<br>"+"Email: "+sportChoice.email+"<br>"+"Website: "+"<a href="+sportChoice.website+">"+sportChoice.website+"</a>").openPopup();
             marker.closePopup();
           });
 
       }
 