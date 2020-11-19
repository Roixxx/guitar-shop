<?php


require_once 'connection.php';

$id = $_GET['id'];
$sql_info = "SELECT * FROM `catalog` WHERE `id` = '$id'";
$sql_meta = "SELECT `meta_key`, `meta_value` FROM `product_meta` WHERE `product_id` = '$id'";

$product_info = mysqli_query($link, $sql_info);
$product_meta = mysqli_query($link, $sql_meta);

$arr = array('info' => array(),'characteristics' => array());

while ($row = mysqli_fetch_assoc($product_info)) {
	$arr['info'] = $row;
}

while ($row = mysqli_fetch_assoc($product_meta)) {
	$arr['characteristics'][] = $row;
}


echo json_encode($arr);

