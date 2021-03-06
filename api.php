<?php

if (isset($_POST['mag'])) {

    $mag = $_POST['mag'];

    $getUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=$mag";

    $get = curl_init();

    curl_setopt($get, CURLOPT_URL, $getUrl);
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
}
