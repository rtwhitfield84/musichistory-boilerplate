"use strict";	
var xhr = require("./xhr.js");

  var songObj = {};
  var filteredVal;
  var key;

	$("#addMusicNav").click(function () {
		$("#addMusic").removeClass("hide");
		$("#listMusicWrapper").addClass("hide");
});

	$("#listMusicNav").click(function (){
		$("#addMusic").addClass("hide");
		$("#listMusicWrapper").removeClass("hide");
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
	$('select').change(function () {
	filteredVal = $(this).val();
	key = this.id;
	});

	$("#filterBtn").click(function () {
		xhr.filterSongs(key, filteredVal);
		$('option').prop('selected', function() {
        return this.defaultSelected;
    });	
		 $("#genre").find("input").prop('checked', false);
	});

	$('#genre').change(function () {
		filteredVal = $(":checkbox:checked").val();
		key = this.id;
	});

//get value of genre then filter by specific artist or album

function add() {
	songObj.title = $("#songInputName").val();
	songObj.artist = $("#songInputArtist").val();
	songObj.album = $("#songInputAlbum").val();
	songObj.genre = $("#songInputGenre").val();
	xhr.userAddedSongsArray.push(songObj);
	xhr.dataMover(xhr.userAddedSongsArray);
  	xhr.userAddedSongsArray.pop();
	$("#songInputName").val('');
	$("#songInputArtist").val('');
	$("#songInputAlbum").val('');
	$("#songInputGenre").val('');
}









