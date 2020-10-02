<?php

if (!isset($_REQUEST['term'])) exit(); 
$q = $_REQUEST['term'];
$return_arr = array();

$sport[]="Golf";
$sport[]="Football";
$sport[]="Jogging";
$sport[]="Basketball";
$sport[]="Volleyball";
$sport[]="Cycling";
$sport[]="Riding";
$sport[]="Gymnastics";
$sport[]="Judo";
$sport[]="Rowing";
$sport[]="Swimming";
$sport[]="Tennis";
$sport[]="Archery";


if ($q !== "") {
   $q=strtolower($q); $len=strlen($q);
   foreach($sport as $n) {
     if (stristr($q, substr($n,0,$len)))
       $return_arr[] = $n;
     }
   }

echo json_encode($return_arr);

?>