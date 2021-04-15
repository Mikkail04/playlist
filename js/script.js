let allSongs = [
  {
    song_name: "Bands",
    song_artist: "Comethazine",
    song_length: "1:38",
    song_image:
      "https://e.snmc.io/i/600/w/1a9c7342f77420c620961ca0de9cd7a5/6973763",
    song_link: "https://www.youtube.com/watch?v=6TOoD1-7_GY"
  },
  {
    song_name: "New Tank",
    song_artist: "Playboi Carti",
    song_length: "1:28",
    song_image: "https://i.ytimg.com/vi/nQC6MyBHceE/maxresdefault.jpg",
    song_link: "https://www.youtube.com/watch?v=6TOoD1-7_GY"
  },
  {
    song_name: "Time Today",
    song_artist: "Moneybagg",
    song_length: "2:16",
    song_image:
      "https://i1.sndcdn.com/artworks-QLryNlvP1LYP-0-t500x500.jpg",
    song_link: "https://www.youtube.com/watch?v=1H6xw0B3phU"
  },
  {
    song_name: "Patek",
    song_artist: "Lil Uzi Vert",
    song_length: "4:40",
    song_image:
      "https://i.ytimg.com/vi/GiqoknOr4z4/maxresdefault.jpg",
    song_link: "https://www.youtube.com/watch?v=GiqoknOr4z4"
  },
  {
    song_name: "Runnin",
    song_artist: "21 Savage",
    song_length: "3:15",
    song_image:
      "https://i.ytimg.com/vi/jbdROU6eJVg/maxresdefault.jpg",
    song_link: "https://www.youtube.com/watch?v=jbdROU6eJVg"
  },
  {
    song_name: "Portland",
    song_artist: "Drake",
    song_length: "3:54",
    song_image:
      "https://i.ytimg.com/vi/pBdVsDC4vpA/maxresdefault.jpg",
    song_link: "https://www.youtube.com/watch?v=pBdVsDC4vpA"
  }
];
let userInput;
let userInput2;
let userInput3;
let userInput4;
let userInput5;

function showPlaylist() {
  for (let item of allSongs) {
    $(".playlist").append(`<div class = "song"> <div class = "playlist-song-name">
              ${item.song_name}
          </div>
          <div class = "part playlist-song-artist">
               ${item.song_artist}
          </div>
          <div class = "part playlist-song-length">
              ${item.song_length}
          </div>
          <div class = "part playlist-song-image">
           <img src="${item.song_image}">
            </div>
            <div class = "part playlist-song-link">
             <a href="${item.song_link}">link</a>
            </div></div>`);
  }
}
showPlaylist();

function addSong() {
  userInput = $(".input").val();
  userInput2 = $(".input2").val();
  userInput3 = $(".input3").val();
  userInput4 = $(".input4").val();
  userInput5 = $(".input5").val();
  var newSong = {
    song_name: userInput,
    song_artist: userInput2,
    song_length: userInput3,
    song_image: userInput4,
    song_link: userInput5
  }
  allSongs.push(newSong);
}

$(".button").click(function() {
  addSong();
  showPlaylist();
});
