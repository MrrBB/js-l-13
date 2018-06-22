$(document).ready(function(){
	
	btns = $('.main_btn, .main_btna, .main_nav>nav>ul>li:eq(1)');

	btns.on( "click", function(){
		$('.modal').slideDown('slow');
		$('.overlay').fadeToggle('slow')
	})


	closeBtn = $('.modal>.close');
	closeBtn.on("click", function() {
		$('.modal').slideUp('slow');
		$('.overlay').fadeOut('slow')
	})
})