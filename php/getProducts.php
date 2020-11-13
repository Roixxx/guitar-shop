<?php> 

require_once 'connection.php';

$sql = "select * from catalog";
$result = mysqli_query($link, $sql) or die("Error in Selecting " . mysqli_error($connection));

//создаем массив
$arr = array();


//добавляем данные в массив
while($row = mysqli_fetch_assoc($result)) {
    $arr[] = $row;
}

//выводим в JSON
echo json_encode($arr);

//закрываем соединение с бд
mysqli_close($link);