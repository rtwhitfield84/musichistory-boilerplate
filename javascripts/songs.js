/*GET INPUTS*/
var addBtn = document.getElementById("addMusicBtn");
var listBtn = document.getElementById("listMusicBtn");
var navBar = document.getElementById("navBar");
var listMusicNav = document.getElementById("listMusicNav");
var addMusicNav = document.getElementById("addMusicNav");
var addMusicSection = document.getElementById("addmusic");
var listMusicWrapper = document.getElementById("listMusicWrapper");
var songInputName = document.getElementById("songInputName");
var songInputArtist = document.getElementById("songInputArtist");
var songInputAlbum = document.getElementById("songInputAlbum");
var songList = document.getElementById("songs");
var newData;

/*EVENT LISTENERS*/
navBar.addEventListener("click", function(event) {
	if (event.target === addMusicNav) {
		addMusicSection.classList.remove("hidden");
		listMusicWrapper.classList.add("hidden");
	} else if (event.target === listMusicNav) {
		addMusicSection.classList.add("hidden");
		listMusicWrapper.classList.remove("hidden");
	}
});



addMusicSection.addEventListener("click", function(event) {
	if (event.target === addBtn) {
		newDataName = songInputName.value;
		songList.innerHTML += "<div class='song-block'><h3>" + newDataName + "</h3>";
		newDataArtist = songInputArtist.value;
		songList.innerHTML += "<div class='artist'>Performed by " + newDataArtist + "</div";
		newDataAlbum = songInputAlbum.value;
		songList.innerHTML += "<div class='album'>On the album " + newDataAlbum + "</div></div>";
		songList.innerHTML += "<button class='delete'>" + "Delete" + "</button>";
		songInputName.value = "";
		songInputArtist.value = "";
		songInputAlbum.value = "";
	}
});


//get value from inputs*
//push to new data array
//call dom function 
//pass new data
//
//
//
//