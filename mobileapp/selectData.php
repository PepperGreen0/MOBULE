<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "androiddb";
//Ceate connection
$conn=mysqli_connect($servername,$username,$password,$dbname);
//Check connection
if(!$conn){
die("Connection failed:".mysqli_connect_error());
}
$sql="SELECT*FROM usertb";
$query=mysqli_query($conn,$sql);
if(!$query){
	printf("Error:%s\n",$conn->error);
	exit();
}
$resultArray=array();
while($result=mysqli_fetch_array($query,MYSQLI_ASSOC))
{
array_push($resultArray,$result);
}
mysqli_close($conn);
echo json_encode($resultArray);
?>
