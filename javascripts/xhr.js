$(function () {

  $.getJSON("songs.json", function (data) {
      dataMover(data);
  });

function dataMover(data){
    var songList = $("#songs");

  $.each(data.songs, function(index, value) {
    songList.append(`<div class='song-block'><h3>${value.title}</h3><div class='artist'>Performed by ${value.artist} </div><div class='album'>On the album ${value.album}</div><button class='delete'>Delete </button></div>`);

  if ($(':not([more])')){
    $("#btnFooter").append("button").attr("id", "more").html("More >");
    }
  });

$("#more").click(function () {
    $.getJSON("songsTwo.json", function (data) {
    dataMover(data);
    });
});

$(document).on('click','.delete',function() {
    $(this).closest("div").remove();
    });
  } 
});
















