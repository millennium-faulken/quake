<?php
$getUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=5";

$getQuake = file_get_contents($getUrl);

echo $getQuake;
