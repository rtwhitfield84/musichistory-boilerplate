console.log("First line in JS file");
console.log(Date.now()); //time stamp when page loads

function executeThisIfXHRFails(xhrEvent) {
  console.log("An error occured while transferring the data");
}

function executeThisCodeAfterFileIsLoaded() {
  console.log("this", this );
  console.log("execute this code after file is loaded");
  console.log( Date.now() );

  // parse the response text as JSON. Turns string of characters into a JS object
  // (observe that JSON keys are strings, which is not how a JS object is formatted)
   // 'this' is the XMLHttpRequest
  var data = JSON.parse(this.responseText);
  console.log("data", data );

  var songList = document.getElementById("songs");

  for(currentSong in data.songs) {
    var songData = '';
    var song = data.songs[currentSong];
    songData += "<div class='song-block'>";
    songData += `<h1>${song.title}</h1>`;
    songData += "<div class='artist'>Performed by ";
    songData += song.artist;
    songData += "</div>";
    songData += "<div class='album'>On the album ";
    songData += song.album;
    songData += "</div>";
    songData += "</div>";

    songList.innerHTML += songData;
  }
}

var myRequest = new XMLHttpRequest();

// The event listener listens for the load event, THEN runs.
// This is asynchronous and acts as a callback.
// The functions are not called until after the event happens.
myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisIfXHRFails);

// open tells it what to do with one of the HTTP verbs (GET, POST, PUT, DELETE)
myRequest.open("GET", "songs.json");
// starts the process. It means go
myRequest.send();

console.log("Last line in JS file");
console.log(Date.now()); //time stamp when page ends
