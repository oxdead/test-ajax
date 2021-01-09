<?php
header('Content-type: application/json');
//header('Access-Control-Allow-Origin: *'); // do not use this on production, can remove defense from cross-site-ref attack
$json = file_get_contents('php://input');
$json_decode = json_decode($json, true);  // returns as assoc array

// send back 
$json_encode = json_encode($json_decode); // decode->encode escapes symbols properly, like turning // into \/\/
echo $json_encode;
?>