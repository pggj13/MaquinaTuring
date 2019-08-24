<?php
require './environment.php';
$config = array();

global $config;

if(ENVIRONMENT == "deselopment"){
    
    $config['dbname'] = "";
    $config['host'] = "";
    $config['dbuser'] = "";
    $config['dbpass'] = "";
    
}else{
    
    $config['dbname'] = "";
    $config['host'] = "";
    $config['dbuser'] = "";
    $config['dbpass'] = "";
    
}

