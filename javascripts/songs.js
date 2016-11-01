$(function () {

	$("#addMusicNav").click(function () {
		$("#addmusic").removeClass("hidden");
		$("#listMusicWrapper").addClass("hidden");
});

	$("#listMusicNav").click(function (){
		$("#addmusic").addClass("hidden");
		$("#listMusicWrapper").removeClass("hidden");
});

	$("#addMusicBtn").click(function (){

		newDataName = $("#songInputName").val();
		newDataArtist = $("#songInputArtist").val();
		newDataAlbum = $("#songInputAlbum").val();
		$("#songs").append(`<div class='song-block'><h3> ${newDataName}</h3><div class='artist'>Performed by${newDataArtist}</div><div class='album'>On the album${newDataAlbum} </div></div><button class='delete'>Delete</button>`);
		songInputName.val('');
		songInputArtist.val('');
		songInputAlbum.val('');
	});
});



















