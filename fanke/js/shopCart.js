

	$('#selectAll').click(function(){
		//当全选选中的时候单选都选中/
		//prop设置属性
		$('.sl').prop('checked',$(this).prop('checked'));
		
		console.log(1);
	});
	console.log($('.sl'));
	$('.sl').click(function(){
		
		console.log(1);
		var flag = true;
		$('.sl').each(function(index,ele){
		
			if(!$(ele).prop('checked')){
				
				flag = false;
				return;
			}		
		})
		if(flag){
			
			$('#selectAll').prop('checked',true);
		}else{
			$('#selectAll').prop('checked',false);
		}
	})

