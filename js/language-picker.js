		
		
function change(sourceUrl) {
	alert(sourceUrl)
    var audio = $("#player");      
    $("#ogg_src").attr("src", sourceUrl);
    /****************/
    audio[0].pause();
    audio[0].load();//suspends and restores all audio element

    //audio[0].play(); changed based on Sprachprofi's comment below
    audio[0].oncanplaythrough = audio[0].play();
    /****************/
}		