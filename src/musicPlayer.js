"use strict";
$(document).ready(function() {
	$("#musicButton").empty().append('►');
	$("#musicButton").click(playMusic);

	var videoDiv = document.createElement('div');
	videoDiv.id = 'hiddenVideo';
	// document.getElementsByTagName('body')[0].appendChild(videoDiv);
	$("#mainbox").append(videoDiv);
	$("#hiddenVideo").css({
		"position": "absolute", 
		"top": "0", 
		"z-index": "-1",
		"opacity": "0.1"
	});

	

	function playMusic(){
		$("#hiddenVideo").html("<iframe id=\"videoIframe\" width=\"450\" height=\"300\" src=\"http://www.youtube-nocookie.com/embed/" + randomizeMusic() + "\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>");
		$("#musicButton").empty().append('❚❚');
		$("#musicButton").off("click").click(pauseMusic);
	}

	function pauseMusic(){
		$("#hiddenVideo").empty();
		$("#musicButton").empty().append('►');
		$("#musicButton").off("click").click(playMusic);;
	}

	function randomizeMusic(){
		var outputString = "";
		var videoID = "XDA7WSMyiro";	//Edit this to use a video ID
		var playlist = true;	//Switch between video and playlist mode
		var playlistID = "PLBML8SXyfQ6f0HYiKTs3riLBTaQfO-sGz";	//Edit this to use a playlist and start playing at a random video
		var playlistLength = "22";	//Enter the amount of video in the playlist manually (Not using the api just to find this out...)

		if (playlist) {
			var randomIndex = Math.round(Math.random() * (playlistLength - 1));
			outputString = "?listType=playlist&list=" + 
							playlistID + 
							"&amp;index=" + 
							randomIndex + 
							"&amp;controls=1&amp;showinfo=0&autoplay=1";
		} else {
			outputString = videoID + 
							"?rel=0&?amp;controls=1&amp;showinfo=0&autoplay=1";
		}

		return outputString;
	}

});
