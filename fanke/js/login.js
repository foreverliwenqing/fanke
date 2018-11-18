	var ulAll = document.querySelector('.ul').children;
	var logins = document.querySelector('.form').children;
	
	
	console.log(ulAll.length);
	console.log(logins);
	
	for(var i = 0; i < ulAll.length; i++){
		
		ulAll[i].index = i;	//给$a[i]中的index的属性都添加一个对应的i的值。
		
		ulAll[i].onclick = function(){
			
			//当点击时获取点击的下标
			var index = this.index;
			
			for(var j = 0; j < ulAll.length; j++){				
				ulAll[j].className = '';
				logins[j+1].style.display = 'none';
			}
			this.className = 'active';
			logins[index+1].style.display = 'block';
		}		
	}


//class ShowImg{
//	
//	constructor(obj){
//		this.phoneCode = obj.phoneCode;
//		this.pwdCode = obj.pwdCode;
//		this.LoginBtn = obj.LoginBtn;
//		
//		console.log(this.LoginBtn);
//		this.login();
//	};	
//	login(){
//		var _this = this;
//
//		this.LoginBtn.click(function(){
//			console.log(11)
//			
//			var phone = _this.phoneCode.val();
//			
//			var pro = new Promise(function(suc,fail){
//				
//				$.ajax({
//					type:'get',
//					data:{
//						phone : phone,
//						pwd : _this.pwdCode.val()
//					},
//					url:'../php/login.php',
//					
//					//ajax成功之后返回的值。
//					success : function(res){
//						
//						//成功后把数据传递promise
//						suc(res);
//					}				
//				});
//			});
//			
//			//成功之后加载跳转页面
//			
//			_this.connect(pro);
//		});
//		
//	};
//	
//	connect(pro){
//		
//		var _this = this;
//		pro.then(function(res){
//			console.log(res);
//			if(res == 1){
//				alert('登录成功');
//				window.location.href='showBigImg.html';
//			}else if(res == 0){
//				alert('登录失败');
//				window.location.href='login.html';				
//			}
//		})
//	}
//	
//}

