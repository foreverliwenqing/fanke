<?php
	
	$phone = $_GET['phone'];
	
	$pwd = $_GET['pwd'];
	
//	echo $phone;
	
	header("content-type:text/html;charset=utf-8");
	
	//链接数据源
	$db = mysqli_connect("localhost","root","",'person');
	//设置字符集
	mysqli_query($db,"set names utf8");
	
	//执行sql语句
	
	$sql = 'select * from fankeregister';
	
	$result = mysqli_query($db,$sql);
	
	$falg = false;
	//为false表示数据不存在
	while($arr = mysqli_fetch_array($result)){
		
		if($arr['phone'] == $phone && $arr['pwd'] == $pwd){
			//表示数据存在
			echo "<script>alert('登录成功');</script>";
			echo "<script>location.href = '../showBigImg.html?phone=$phone';</script>";

		}else{
			$falg = true;
		}
	}
	
	if($falg){
		
		echo "<script>alert('登录失败');</script>";	
		echo "<script>location.href = '../login.html';</script>";
	}
?>