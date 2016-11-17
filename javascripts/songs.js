"use strict";	
var xhr = require("./xhr.js");

  var songObj = {};

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




/*Firebase stuff*/


// <script src="https://www.gstatic.com/firebasejs/3.6.1/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyB7r_ccXtvDouTLBKFzbcI1xjiRPYgV2PQ",
//     authDomain: "musichistory-79ae9.firebaseapp.com",
//     databaseURL: "https://musichistory-79ae9.firebaseio.com",
//     storageBucket: "musichistory-79ae9.appspot.com",
//     messagingSenderId: "909988233980"
//   };
//   firebase.initializeApp(config);
// </script>





