$('document').ready(function(){

	$('.hubungi').click(function(){

		$('.email').html("<h5>Email: <a href=''>bachtiardwijulianto@gmail.com</a> </h5>");
		$('.wa').html("<h5>WhatsApp: 085812143922 </h5>");

	});

	$('#portfolio .img2').click(function(){
		$('.img1').attr('src', 'img/portfolio2.png');
		$('.img1').animate({opacity: '0.4'}, 'slow');
		$('.img1').animate({opacity: '1'}, 'slow');

	});

	$('#portfolio .img3').click(function(){
		$('.img1').attr('src', 'img/portfolio3.png');
		$('.img1').animate({opacity: '0.4'}, 'slow');
		$('.img1').animate({opacity: '1'}, 'slow');

	});

	$('#portfolio .img4').click(function(){
		$('.img1').attr('src', 'img/portfolio4.png');
		$('.img1').animate({opacity: '0.4'}, 'slow');
		$('.img1').animate({opacity: '1'}, 'slow');

	});

	$('#portfolio .img5').click(function(){
		$('.img1').attr('src', 'img/portfolio5.png');
		$('.img1').animate({opacity: '0.4'}, 'slow');
		$('.img1').animate({opacity: '1'}, 'slow');

	});

	$('#portfolio .img7').click(function(){
		$('.img6').attr('src', 'img/portfolio6.png');
		$('.img6').animate({opacity: '0.4'}, 'slow');
		$('.img6').animate({opacity: '1'}, 'slow');

	});

	$('#portfolio .img8').click(function(){
		$('.img6').attr('src', 'img/portfolio7.png');
		$('.img6').animate({opacity: '0.4'}, 'slow');
		$('.img6').animate({opacity: '1'}, 'slow');

	});

	$('#portfolio .img10').click(function(){
		$('.img9').attr('src', 'img/portfolio8.png');
		$('.img9').animate({opacity: '0.4'}, 'slow');
		$('.img9').animate({opacity: '1'}, 'slow');

	});

	$('#portfolio .img11').click(function(){
		$('.img9').attr('src', 'img/portfolio9.png');
		$('.img9').animate({opacity: '0.4'}, 'slow');
		$('.img9').animate({opacity: '1'}, 'slow');

	});



})