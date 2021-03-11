let songNames = ["Bands", "New Tank", "Time Today", "Patek", "Runnin", "Portland"]
let songArtists = ["Comethazine", "Playboi Carti", "Moneybagg Yo", "Lil Uzi Vert", "21 Savage", "Drake"]
let songLength = ["1:38", "1:28", "2:16", "4:40", "3:15", "3:54"]
let songImages = ["https://e.snmc.io/i/600/w/1a9c7342f77420c620961ca0de9cd7a5/6973763", 
"https://i.ytimg.com/vi/nQC6MyBHceE/maxresdefault.jpg",
"https://i1.sndcdn.com/artworks-QLryNlvP1LYP-0-t500x500.jpg",
"https://i.ytimg.com/vi/GiqoknOr4z4/maxresdefault.jpg",
"https://i.ytimg.com/vi/jbdROU6eJVg/maxresdefault.jpg", 
"https://i.ytimg.com/vi/pBdVsDC4vpA/maxresdefault.jpg"]
let songLinks = ["https://www.youtube.com/watch?v=6TOoD1-7_GY",
  "https://www.youtube.com/watch?v=nQC6MyBHceE",
  "https://www.youtube.com/watch?v=1H6xw0B3phU",
  "https://www.youtube.com/watch?v=GiqoknOr4z4",
  "https://www.youtube.com/watch?v=jbdROU6eJVg",
  "https://www.youtube.com/watch?v=pBdVsDC4vpA"
]

for (let image of songImages){
  $(".playlist-songImages").append(`<img src=${image}>`);
}
for (let song of songNames){
  $(".playlist-songs").append(`<li>${song}</li>`);
}
for (let artist of songArtists){
  $(".playlist-artists").append(`<li>${artist}</li>`);
}
for (let length of songLength){
  $(".playlist-songLength").append(`<li>${length}</li>`);
}
