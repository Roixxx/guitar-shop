<?php> 

$link = mysqli_connect($host, $user, $pass, $db_name); // Соединяемся с базой

if (!$link) {
    echo 'Не могу соединиться с БД. Код ошибки: ' . mysqli_connect_errno() . ', ошибка: ' . mysqli_connect_error();
    exit;
}


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
