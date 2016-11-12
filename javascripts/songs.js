"use strict";	
var xhr = require("./xhr.js");

  var songObj = {};

	$("#addMusicNav").click(function () {
		$("#addmusic").removeClass("hidden");
		$("#listMusicWrapper").addClass("hidden");
});

	$("#listMusicNav").click(function (){
		$("#addmusic").addClass("hidden");
		$("#listMusicWrapper").removeClass("hidden");
});

	$("#addMusicBtn").click(function (){
			add();
      $("#songInputName").focus();
	});
	$("#songInputAlbum").keypress(function (e) {
		if(e.keyCode !== 13) { 
 	} else {
 		add();
    $("#songInputName").focus();
 	}	
	});


function add() {
	songObj.title = $("#songInputName").val();
	songObj.artist = $("#songInputArtist").val();
	songObj.album = $("#songInputAlbum").val();
	xhr.userAddedSongsArray.push(songObj);
	xhr.dataMover(xhr.userAddedSongsArray);
  xhr.userAddedSongsArray = [];
	xhr.allSongsArray.push(songObj);
	$("#songInputName").val('');
	$("#songInputArtist").val('');
	$("#songInputAlbum").val('');
}













