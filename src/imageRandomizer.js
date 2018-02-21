$(window).load(function(){
	var imgCount = 12;
	var dir = 'src/images/';
	var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
	var images = new Array
	    images[1] = 'side01.gif',
	    images[2] = 'side02.gif',
	    images[3] = 'side03.gif',
	    images[4] = 'side04.gif',
	    images[5] = 'side05.gif',
	    images[6] = 'side06.gif',
	    images[7] = 'side07.gif',
	    images[8] = 'side08.gif',
	    images[9] = 'side09.gif',
	    images[10] = 'side10.gif',
	    images[11] = 'side11.gif',
	    images[12] = 'side12.gif';
	document.getElementById('sidebar').style.backgroundImage = 'url(' + dir + images[randomCount] + ')';
});