"use strict";
$(document).ready(function() {
	$("#musicButton").empty().append('►');
	$("#musicButton").click(playMusic);

	var videoDiv = document.createElement('div');
	videoDiv.id = 'hiddenVideo';
	document.getElementsByTagName('body')[0].appendChild(videoDiv);
	

	function playMusic(){
		$("#hiddenVideo").html("<iframe id=\"videoIframe\" width=\"0\" height=\"0\" src=\"https://www.youtube.com/embed/tU2WMPyQVqg?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>");
		$("#musicButton").empty().append('❚❚');
		$("#musicButton").off("click").click(pauseMusic);
	}

	function pauseMusic(){
		$("#hiddenVideo").empty();
		$("#musicButton").empty().append('►');
		$("#musicButton").off("click").click(playMusic);;
	}
});