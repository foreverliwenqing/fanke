//头部导航

//移动的时获取移动的下标

$('#navList>ul>li').mouseover(function(){	
	//获取当前li处于的下标
	var index = $(this).index('#navList>ul>li');
	
	if(index <= 1){
		index = 20;
	}	
	$("#navList>ul>li>ul").eq(index-2).stop().slideDown('fast');
	
})
$('#navList>ul>li').mouseout(function(){
	
	//获取当前li处于的下标
	var index = $(this).index('#navList>ul>li');
	
	if(index <= 1){
		index = 20;
	}	
	console.log(index);
	
	$("#navList>ul>li>ul").eq(index-2).stop().slideUp('fast');
	
})