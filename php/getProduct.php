<?php


require_once 'connection.php';

$id = $_GET['id'];

$product_meta = mysqli_query($link, "SELECT * FROM `product_meta` WHERE `product_id` = '$id'");

$arr = array();

while ($row = mysqli_fetch_assoc($product_meta)) {
	$arr[] = $row;
}


echo json_encode($arr);

mysqli_close($link);