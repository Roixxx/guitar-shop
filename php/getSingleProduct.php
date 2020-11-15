<?php


require_once 'connection.php';


if (isset($_GET['id']) && !empty($_GET['id'])) {
	echo "App = " . $_GET['id'];
} else {
	echo "no id";
}