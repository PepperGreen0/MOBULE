<?php
$servername = "localhost";
$username = "root";
$password ="cpe1234";
$dbname = "androiddb";
$user_id = $_GET["user_id"]; 
$user_name = $_GET["username"];
$passwd = $_GET["password"];

$conn = new mysqli($servername,$username,$password,$dbname);

//Create connect
if($conn->connect_error){
    die("Connection failed".$conn->connect_error);
}

$sql = "INSERT INTO usertb (id,user_id,user_name,passwd)
VALUES (null,'$user_id','$user_name','$passwd')";

if ($conn->query($sql) === TRUE) { 
    //echo "New record created successfully"; 
  echo json_encode(array("New record created successfully"));
  } else { 
    echo "Error: " . $sql . "<br>" . $conn->error; 
  }

$conn->close(); 
?>
