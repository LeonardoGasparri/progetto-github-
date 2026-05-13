

let mappa = L.map('mappa').setView([45.3138, 9.5025], 15);

let osm =L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(mappa);

let myIcon = L.icon({
    iconUrl: 'img/marcatore.png',
     iconSize: [40, 38],
    iconAnchor: [15, 5],
    popupAnchor: [15, 15] 
});

const xhr = new XMLHttpRequest();

xhr.open("GET", "orientale.json", true);
let dati;
const linea = [];
xhr.addEventListener("load", () => {
    dati = JSON.parse(xhr.responseText);
    dati.map(
        (tappa) => {
        const t = L.marker([tappa.altitudine, tappa.longitudine], {icon: myIcon}).addTo(mappa);
        t.bindPopup("<h3>" + tappa.nome + "</h3><h4>"+tappa.sezione +"</h4><p>" + tappa.descrizione +"</p>Specialità del posto: " +tappa.prodottiTipici + "</p><p>Num. telefono: "+ tappa.telefono + "</p>");
        linea.push([tappa.altitudine, tappa.longitudine]); 
        }
    );
    L.polyline(linea, {color: 'red'}).addTo(mappa); 
});

xhr.send();


/* let tradiz = L.layerGroup([masseroni, gaffurio, laColdana]);
let tipica = L.layerGroup([caffèNazionale, NapolinPizza]);
let veggie = L.layerGroup([laBonta, laColdana]);
let sushi = L.layerGroup([mod, haiku, koora]);
let fast = L.layerGroup([mc, piadineria, kairos]);

let tipoMappa = {
    "OpenStreetMap": osm,
};

let percorsi = {
    "GIORNATA TRADIZIONALE": tradiz,
    "GIORNATA TIPICA":  tipica,
    "GIORNATA VEGANA":  veggie,
    "GIORNATA ORIENTALE":  sushi,
    "GIORNATA FAST FOOD":  fast,
};

let layerControl = L.control.layers(tipoMappa, percorsi).addTo(mappa) */

