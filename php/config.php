<?php 
    $conn = mysqli_connect('localhost', 'root', '', 'ccechat');
    if(!$conn) {
        echo "Database connected" . mysqli_connect_error();
    }
?>