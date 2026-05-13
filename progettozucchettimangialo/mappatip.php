<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
     <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>


    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.css" />
    <script src="https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.js"></script>
    <script src="scripttip.js" defer></script>
    <title>Mappa - MangiaLo-Di</title>
</head>
<body>
    <header class="header">
       <div class="container">
        <img class="logo" src="img/logo.png">
        <h1 class="h1">Mappa - MangiaLo-di</h1>
        <h3>Itinerari del gusto di Lodi</h3>
            <?php
                include "navbar.php";
            ?>
        </div>
    </header>
            <div id="mappatip"></div>
            <div class="brand-footer">
            <p> Mappa - MangiaLodi.it</p>
        </div>
</body>
</html>