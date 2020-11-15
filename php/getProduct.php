<?php


require_once 'connection.php';

$id = $_GET['id'];
$sql = "SELECT `meta_key`, `meta_value` FROM `product_meta` WHERE `product_id` = '$id'";


$product_meta = mysqli_query($link, $sql);

$arr = array();

while ($row = mysqli_fetch_assoc($product_meta)) {
	$arr[] = $row;
}


echo json_encode($arr);

