
var ul = document.querySelector('.ulImg')
var ulAll = document.querySelector('.ulImg').children;

var olAll = document.querySelector('.olImg').children;

//console.log(olAll);

var timer = setInterval(autoImg,1000);

var index = 0;
function autoImg(){
	
	for(var i = 0; i < ulAll.length - 1; i++){
		olAll[i].className = '';
	}
	
	if(index == 4){
		ul.style.left = 0;
		index = 0;
	}else{
		index ++;
	}
//	console.log(index);
	
	ul.style.left = -1200*index + 'px';
	
	olAll[index].className = 'active'; 
}

var prev = document.querySelector('.prev');

var next = document.querySelector('.next');

next.onmouseover = function(){
	
	clearInterval(timer);
}

prev.onmouseover = function(){
	
	clearInterval(timer);
}
//console.log(prev,next);

ul.onmouseover = function(){
	
	clearInterval(timer);
}
ul.onmouseout = function(){
//	alert(2);
	
	//给timer重新赋值。
	timer = setInterval(autoImg,1000);
}

prev.onclick = function(){
	
		if(index == 0){
			index = 4;
		}else{
			index --;
		}
		ul.style.left = -1200*index + 'px';

		for (var i = 0; i <	olAll.length; i++) {
			olAll[i].className = "";
		}
	olAll[index].className = "active";
}
next.onclick = function(){
		if(index == 4){
			index = 0;
		}else{
			index ++;
		}
		ul.style.left = -1200*index + 'px';
		
		for (var i = 0; i < olAll.length; i++) {
			olAll[i].className = "";
		}
		olAll[index].className = "active";	
}



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
