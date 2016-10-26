var data;
function executeThisIfXHRFails(xhrEvent) {
}

function executeThisCodeAfterFileIsLoaded() {

  
  data = JSON.parse(this.responseText).songs;
  dataMover(data);

}

function dataMover(data){
  var songList = document.getElementById("songs");
  var btnFooter = document.getElementById("btnFooter");
  var deleteButton;
  var deleteParent;

  for(currentSong in data) {
    var songData = '';
    var song = data[currentSong];
    songData += "<div class='song-block'>";
    songData += `<h3>${song.title}</h3>`;
    songData += "<div class='artist'>Performed by ";
    songData += song.artist;
    songData += "</div>";
    songData += "<div class='album'>On the album ";
    songData += song.album;
    songData += "</div>";
    songData += "<button class='delete'>" + "Delete" + "</button>";
    songData += "</div>";
    songList.innerHTML += songData;
   
  }

if (!document.getElementById("more")) {
  var moreButton = document.createElement("BUTTON");
  moreButton.setAttribute("id", "more");
  moreButton.innerHTML = "More >";

  moreButton.addEventListener("click", function(event) {
    moreSongs();
  });
}
  btnFooter.appendChild(moreButton);
  deleteButton = document.getElementsByClassName("delete");
  deleteParent = document.getElementsByClassName("song-block");
  songList.addEventListener("click", function(event) {
  for (var i = 0; i < deleteParent.length; i++) {
      if (event.target === deleteButton[i]) {
        songList.removeChild(deleteParent[i]);
       }
      }
  });
}
 
var myRequest = new XMLHttpRequest();


myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisIfXHRFails);

myRequest.open("GET", "songs.json");
myRequest.send();

var moreSongs = function () {
  myRequest.open("GET", "songsTwo.json");
  myRequest.send();
};

