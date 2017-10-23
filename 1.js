 $(function(){


	/*su kien click*/
	
	$('.btn1').click(function(){
		$('body').animate({scrollTop:$('.products').offset().top},2000,"easeOutBounce");
		return false;
	}) /*end products*/

	$('.btn2').click(function(){
		$('body').animate({scrollTop:$('.about').offset().top},2000,"easeOutBounce");
		return false;
	}) /*end about*/

	$('.btn3').click(function(){
		$('body').animate({scrollTop:$('.form').offset().top},2000,"easeOutBounce");
		return false;
	}) 
	/*end contact*/
	$('.txtStart').click(function(){
		$('body').animate({scrollTop:0},2000,"easeOutBounce");
		return false;
	}) 



	/*tuy chinh navbar*/

	 $(window).scroll(function(){
	 	vitrihientai = $('body').scrollTop();
	 	console.log(vitrihientai);


	 	if(vitrihientai>337){
	 		$('.navbar').addClass('tienhoa');
	 	}
	 	else if(vitrihientai<337){
	 		$('.navbar').removeClass('tienhoa');
	 	}
	 		


	 	/*hieu ung hien ra khi cuon chuot den vitri minh thich*/
	 	if(vitrihientai>500){
	 		$('.products').addClass('hienra');
	 	}
	 	else if(vitrihientai<500){
	 		$('.products').removeClass('hienra');
	 	}

	 })

	 


})  
 