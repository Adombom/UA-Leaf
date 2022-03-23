var map = L.map('map').setView([50.538, 30.231], 10);
       
L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    attribution: '2022 Mug',
    maxZoom: 20, 
    subdomains:['mt0','mt1','mt2','mt3']
    }).addTo(map);
