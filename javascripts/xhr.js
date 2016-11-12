"use strict";
  var songsArray = [];
  var newSongsArray = [];
  var allSongsArray = [];
  var userAddedSongsArray =[];
  var songList = $("#songs");
  
  $.getJSON("songs.json", function (data) {
      songsArray = data.songs;
      dataMover(songsArray);
  });

function dataMover(data){
    for (var i = 0; i < data.length; i++) {
    songList.append(`<div class='song-block'><h3>${data[i].title}</h3><div class='artist'>Performed by ${data[i].artist} </div><div class='album'>On the album ${data[i].album}</div><button class='delete'>Delete </button></div>`);

  if ($(':not([more])')){
    $("#btnFooter").append("button").attr("id", "more").html("More >");
    }
  }

$("#more").click(function () {
      dataMover(newSongsArray);
      newSongsArray = [];
});
    $.getJSON("songsTwo.json", function (data) {
      newSongsArray = data.songs;
      allSongsArray = songsArray.concat(newSongsArray);
    });

$(document).on('click','.delete',function() {
    $(this).closest("div").remove();
    });
  } 

$('#Artist').change(function(){

  if(this.value === "Elliott Smith") {
    var es = $.grep(allSongsArray, function (element, index) {
      $('#Artist').val("Artist");
    return element.artist === "Elliott Smith";
  });
    songList.html("");
    dataMover(es);
 } else if(this.value === "Beck") {
     var beck = $.grep(allSongsArray, function (element, index) {
     $('#Artist').val("Artist");
     return element.artist === "Beck";
  });
    songList.html("");
    dataMover(beck);
 } else if (this.value === "Mississippi John Hurt") {
  var msj = $.grep(allSongsArray, function (element, index) {
    $('#Artist').val("Artist");
    return element.artist === "Mississippi John Hurt";
  });
    songList.html("");
    dataMover(msj);
 } else if (this.value === "Radiohead") {
  var radiohead = $.grep(allSongsArray, function (element, index) {
    $('#Artist').val("Artist");
    return element.artist === "Radiohead";
  });
    songList.html("");
    dataMover(radiohead);
 } else if (this.value === "The Strokes") {
  var strokes = $.grep(allSongsArray, function (element, index) {
    $('#Artist').val("Artist");
    return element.artist === "The Strokes";
  });
    songList.html("");
    dataMover(strokes);
 } else {
  songList.html("");
  dataMover(allSongsArray);
 }

});

$('#Album').change(function(){

  if(this.value === "Figure 8") {
    var figure8 = $.grep(allSongsArray, function (element, index) {
     $('#Album').val("Album");
    return element.album === "Figure 8";
  });
    songList.html("");
    dataMover(figure8);
 } else if(this.value === "Sea Change") {
     var seaChange = $.grep(allSongsArray, function (element, index) {
     $('#Album').val("Album");
     return element.album === "Sea Change";
  });
    songList.html("");
    dataMover(seaChange);
 } else if (this.value === "Today") {
  var today = $.grep(allSongsArray, function (element, index) {
    $('#Album').val("Album");
    return element.album === "Today!";
  });
    songList.html("");
    dataMover(today);
 } else if (this.value === "Kid A") {
  var kidA = $.grep(allSongsArray, function (element, index) {
    $('#Album').val("Album");
    return element.album === "Kid A";
  });
    songList.html("");
    dataMover(kidA);
 } else if (this.value === "Is This It?") {
  var iti = $.grep(allSongsArray, function (element, index) {
    $('#Album').val("Album");
    return element.album === "Is This It?";
  });
    songList.html("");
    dataMover(iti);
 } else {
  songList.html("");
    dataMover(allSongsArray);
 }

});



module.exports = {dataMover,
allSongsArray, userAddedSongsArray};











