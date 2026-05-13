let mappa = L.map('mappatrad').setView([45.3138, 9.5025], 14);

let osm = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap & CARTO',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(mappa);

let myIcon = L.icon({
    iconUrl: 'img/marcatore.png',
    iconSize: [40, 38],
    iconAnchor: [20, 38], // Punto di ancoraggio alla base
    popupAnchor: [0, -35] 
}); 

let taxiIcon = L.icon({
    iconUrl: 'img/auto.png',
    iconSize: [70, 70],
    iconAnchor: [35, 35] // Centrato per l'animazione
});

// Inizializziamo il marker del taxi vuoto, lo posizioneremo dopo
let taxiMarker = L.marker([0, 0], {icon: taxiIcon}).addTo(mappa);

const xhr = new XMLHttpRequest();
const linea = [];
xhr.open("GET", "tradizionale.json", true);

xhr.addEventListener("load", () => {
    const tappe = JSON.parse(xhr.responseText);
    const wayPoints = [];

    // Creazione marker tappe e riempimento array waypoint
    for (let i = 0; i < tappe.length; i++) {
        let posizione = [tappe[i].altitudine, tappe[i].longitudine];
        wayPoints.push(L.latLng(posizione));
        linea.push(posizione);
        
        L.marker(posizione, {icon: myIcon})
            .bindPopup("<h3>" + tappe[i].nome + "</h3><h4>" + tappe[i].sezione + "</h4><p>" + tappe[i].descrizione + "</p><p>Specialità: " + tappe[i].prodottiTipici + "</p><p>Tel: " + tappe[i].telefono + "</p>")
            .addTo(mappa);
    }

    if (wayPoints.length > 0) {
        taxiMarker.setLatLng(wayPoints[0]);
    }

    L.Routing.control({
        waypoints: wayPoints,
        language: "it",
        createMarker: function() { return null; },
        draggableWaypoints: false,
        addWaypoints: false 
    }).on('routesfound', function (e) {
        const route = e.routes[0];
        const coordinates = route.coordinates;

        coordinates.forEach(function(coord, index) {
            setTimeout(() => {
                // Leaflet Routing Machine restituisce oggetti con proprietà .lat e .lng
                taxiMarker.setLatLng([coord.lat, coord.lng]);
            }, 200 * index); // 30ms rende il movimento più fluido
        });
    }).addTo(mappa);
});

xhr.send();