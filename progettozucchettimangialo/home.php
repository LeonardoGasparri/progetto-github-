<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    <title>MangiaLo-di - Home</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script src="https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.js"></script>

</head>
<body>

    <header class="header">
        <div class="container">
            <img class="logo" src="img/logo.png">

            <h1 class="h1">Home-MangiaLo-Di</h1>
            <h3>Itinerari del gusto di Lodi</h3>
            
            <?php
                include "navbar.php";
            ?>

        </div>
    </header>
    
    <main>
        <div class="container">
            <div class="box">
                <p>GIORNATA TRADIZIONALE</p>
                <a href="mappatrad.php"><img class="img" src="img/lodibandiera.png" alt=""></a>
                <p><strong>La giornata perfetta per chi vuole vivere come un vero lodigiano!</strong></p>
            </div>
            
            <div class="box">
                <p>GIORNATA TIPICA</p>
                <a href="mappatip.php"><img class="img" src="img/pizza.png" alt=""></a>
                <p><strong>Sei in cerca di una semplice giornata nostrana? Prova questa giornata in pieno stile italiano</strong></p>
            </div>
            
            <div class="box">
                <p>GIORNATA VEGANA</p>
                <a href="mappaveg.php"><img class="img" src="img/vegano.png" alt=""></a>
                <p><strong>La giornata sostenibile ed adatta a chiunque voglia gustare dei prodotti vegani.</strong></p>
            </div>
            
            <div class="box">
                <p>GIORNATA ORIENTALE</p>
                <a href="mappa.php"><img class="img" src="img/drago.png" alt=""></a>
                <p><strong>La giornata ideale per gli appassionati della cucina estera proveniente dall'estremo oriente!</strong></p>
            </div>
            <div class="box">
                <p>GIORNATA FAST-FOOD</p>
                <a href="mappaff.php"><img class="img" src="img/fastfood.png" alt=""></a>
                <p><strong>La giornata ideale per gli amanti del fast-food, dalle piadine al kebab e agli hamburger!</strong></p>
            </div> 
        </div>
        
        <div class="brand-footer">
            <p>Home - MangiaLodi.it</p>
        </div>
    </main>
</body>
</html> 