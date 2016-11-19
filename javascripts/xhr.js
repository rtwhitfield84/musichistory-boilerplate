"use strict";

let songList = $("#songs"),
    userAddedSongsArray = [],
    artistSelect = $("#artist"),
    albumSelect = $("#album"),
    genreForm = $("#genre");


  function getSongs(callback) {
  return new Promise(function(resolve, reject){
    $.ajax({
      url: 'https://musichistoryv8songs.firebaseio.com/songs.json'
    }).done(function(songData){
      resolve(songData);
    });
  });
}
  getSongs()
    .then(function(songData){
    //add the id to each song and then build the song list
     var idArray = Object.keys(songData);
      idArray.forEach(function(key){
      songData[key].id = key;
    });
    //now make the list with songData
    dataMover(songData);
  });
  //when checkkbox is checked or select given value and filter btn pressed, make call to DB and grab songs that match the value 

  var filterSongs = (key,value) => {
    return new Promise(function(resolve, reject) {
      $.ajax({
        url: `https://musichistoryv8songs.firebaseio.com/songs.json?orderBy="${key}"&equalTo="${value}"`
      }).done(function(data){
        resolve(data);
        songList.html('');
        dataMover(data);
      });
    });
  };

  // https://musichistorydemo-18461.firebaseio.com/songs.json?orderBy="uid"&equalTo="${user}"

function dataMover(data) {
    $.each(data, function(index,element) {
      songList.append(`<div class='song-block'><h3>${element.title}</h3><div class='artist'>Performed by ${element.artist} </div><div class='album'>On the album ${element.album}</div><button class='delete'>Delete </button></div>`);

      if(artistSelect.children('option[value="' + element.artist + '"]').length === 0) {
      artistSelect.append(`<option id='${element.artist}' class='selectOpt' value='${element.artist}'>${element.artist}</option>`);
    }
      if (albumSelect.children('option[value="' + element.album + '"]').length === 0) {
      albumSelect.append(`<option id='${element.album}' class='selectOpt' value='${element.album}'>${element.album}</option>`);
    }

      if(genreForm.children('label[for="' + element.genre + '"]').length === 0) {
      genreForm.append(`<label for="${element.genre}" class="form-check-inline"><input class="form-check-input " type="checkbox" id="${element.genre}" name="genre" value="${element.genre}">${element.genre}</label>`);
    }
      if ($(':not([more])')){
      $("#btnFooter").append("button").attr("id", "more").html("More >");
    }
  });
}



// $("#more").click(function () {
//       dataMover(newSongsArray);
//       newSongsArray = [];
// });

$(document).on('click','.delete',function() {
    $(this).closest("div").remove();
    });



module.exports = {dataMover, filterSongs, userAddedSongsArray};











