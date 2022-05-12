<?php
// $getUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=5";

// $getQuake = file_get_contents($getUrl);

// echo $getQuake;

$getUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=5";

$get = curl_init();

curl_setopt($get, CURLOPT_URL, $getUrl);
curl_setopt($get, CURLOPT_POST, 1);
curl_setopt($get, CURLOPT_RETURNTRANSFER, true);
curl_setopt($get, CURLOPT_SSL_VERIFYPEER, 0);

if (curl_errno($get)) {
    echo curl_error($get);
    curl_close($get);
    exit();
}

$server_output = curl_exec($get);

curl_close($get);

echo $server_output;
