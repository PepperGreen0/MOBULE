<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "androiddb";
$id = $_GET["id"]; 

$conn = new mysqli($servername, $username, $password, $dbname);

// Create connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Use prepared statement to prevent SQL Injection
$sql = "DELETE FROM usertb WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $id);

if ($stmt->execute()) {
    echo "Record deleted successfully";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
