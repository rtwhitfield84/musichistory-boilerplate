
/*Each student must add one song to the beginning and the end of the array.
Loop over the array and remove any words or characters that obviously don't belong.
Students must find and replace the > character in each item with a - character.
Must add each string to the DOM in index.html in the main content area.*/



var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs.unshift("Motion Picture Soundtrack - by Radiohead on the album Kid A");
songs.push("Happiness - by Elliott Smith on the album Figure 8");

for (var i = 0; i < 7; i++) {
	songs[i] = songs[i].replace(/>/g, '-');
	songs[i] = songs[i].replace(/on the album/g, '-');
	songs[i] = songs[i].replace(/by/g, '');
	songs[i] = songs[i].replace('*', '');
	songs[2] = songs[2].replace('@', '');
	songs[4] = songs[4].replace('(', '');
	songs[5] = songs[5].replace('!', '');
	var input = document.getElementById("songList");
	input.innerHTML += "<li>" + songs[i] + "</li>";
	
}
console.log(songs);

// 	
// 	<li><h1>Song</h1></li>
		/*<p>Artist Name	|	Album Name	|	Genre</p>
		<li><h1>Song</h1></li>
		<p>Artist Name	|	Album Name	|	Genre</p>
		<li><h1>Song</h1></li>
		<p>Artist Name	|	Album Name	|	Genre</p>
		<li><h1>Song</h1></li>
		<p>Artist Name	|	Album Name	|	Genre</p>
		<li><h1>Song</h1></li>
		<p>Artist Name	|	Album Name	|	Genre</p>*/





