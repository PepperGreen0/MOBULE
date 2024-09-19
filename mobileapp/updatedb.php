<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "androiddb";
$user_id = $_POST["user_id"];
$user_name = $_POST["user_name"];
$passwd = $_POST["passwd"];
$id = $_POST["id"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE usertb SET user_id='$user_id', user_name='$user_name',passwd='$passwd' WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . $conn->error;
}

$conn->close();
?>