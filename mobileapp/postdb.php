<?php
$servername = "localhost";
$username = "root";
$password ="";
$dbname = "androiddb";
$user_id = $_POST["user_id"]; 
$user_name = $_POST["username"];
$passwd = $_POST["passwd"];

$conn = new mysqli($servername,$user_name,$password,$dbname);

//Create connect
if($conn->connect_error){
    die("Connection failed".$conn->connect_error);
}

$sql = "INSERT INTO usertb (id,user_id,username,passwd)
VALUES (null,'$user_id','$user_name','$passwd')";

if ($conn->query($sql) === TRUE) { 
    //echo "New record created successfully"; 
  echo json_encode(array("New record created successfully"));
  } else { 
    echo "Error: " . $sql . "<br>" . $conn->error; 
  }

$conn->close(); 
?>