

<?php> 




$link = mysqli_connect($host, $user, $pass, $db_name); // Соединяемся с базой

if (!$link) {
    
    echo 'Не могу соединиться с БД. Код ошибки: ' . mysqli_connect_errno() . ', ошибка: ' . mysqli_connect_error();
    exit;
}


$sql = mysqli_query($link, 'SELECT `id`, `name`, `img`, `price` FROM `catalog`');

while ($result = mysqli_fetch_array($sql)) {
    echo "{$result['id']}, {$result['name']}, {$result['img']}, {$result['price']}";
}


