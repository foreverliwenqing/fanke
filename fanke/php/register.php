<?php
	
	$phone = $_GET['uphone'];
	
	$pwd = $_GET['upwd'];
	
	header("content-type:text/html;charset=utf-8");
	
	//链接数据源
	$db = mysqli_connect("localhost","root","",'person');
	//设置字符集
	mysqli_query($db,"set names utf8");
	
	//执行sql语句
	
	$sql = 'select * from fankeregister';
	
	$result = mysqli_query($db,$sql);
	
	//为true表示数据不存在
	$falg = true;
	while($arr = mysqli_fetch_array($result)){
		
		
		if($arr['phone'] == $phone){
			$falg = false;
			//如果注册的数据存在返回注册失败'
			echo "<script>alert('注册失败');</script>";
			echo "<script>location.href = '../register.html';</script>";
		}
	}
	if($falg){
		
		echo "<script>alert('注册成功');</script>";
		$sql = "insert into fankeregister (phone,pwd) values ('$phone','$pwd')";			
		$result = mysqli_query($db,$sql);
		
		echo "<script>location.href = '../login.html';</script>";		
	}	
?>