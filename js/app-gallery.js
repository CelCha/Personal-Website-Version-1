$(document).ready(function(){
	//gallery
	$(".gallery, .profile, .contact").hide();
	$(".portfolio").show();
	
	$("#art-gallery").click(function(){
		$(".art-gallery").fadeIn();
		$(".digital, .traditional, .motion").hide();
	});
	
	$("#digital").click(function(){
		$(".digital").fadeIn();
		$(".traditional, .motion, .art-gallery").hide();
	});
	
	$("#traditional").click(function(){
		$(".traditional").fadeIn();
		$(".digital, .motion, .art-gallery").hide();
	});
	
	$("#motion").click(function(){
		$(".motion").fadeIn();
		$(".traditional, .digital, .art-gallery").hide();		
	});
});

