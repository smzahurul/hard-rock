// const searchSong = () => {
//     const searchText = document.getElementById('search-field').value;
//     // console.log(searchText);
//     const url = `https://api.lyrics.ovh/suggest/:${searchText}`;
//     fetch(url)
//         .then(response => response.json())
//         .then(data => displaySongs(data.data))
// };


// <--Display all Song Search-->
// <--using load Data callback and async await-->:
const searchSong = async() => {
    const searchText = document.getElementById('search-field').value;
    // console.log(searchText);
    const url = `https://api.lyrics.ovh/suggest/:${searchText}`
    const response = await fetch(url);
    const data = await response.json();
    displaySongs(data.data);
};
// <--Display all Song audio files preview artist and album title-->:
const displaySongs = songs => {
    const songContainer = document.getElementById('song-container');
    songContainer.innerHTML = '';
    songs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className = 'single-result row align-items-center my-3 p-3'
        songDiv.innerHTML = `
         <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">Album by <span>${song.artist.name}</span></p>
            <audio controls>
                <source src="${song.preview}" type="audio/mpeg">
            </audio>
         </div>
        <div class="col-md-3 text-md-right text-center">
            <button onclick="songLyrics('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
        </div>
    `;
        songContainer.appendChild(songDiv);
    })
};

// <--using load Data callback and async await-->:
// <--Display Song artist and album title-->:

const songLyrics = async(artist, title) => {
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    const response = await fetch(url);
    const data = await response.json();
    displayLyrics(data.lyrics);
};

// const songLyrics = (artist, title) => {
//     const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
//     fetch(url)
//         .then(response => response.json)
//         .then(data => displayLyrics(data.lyrics));
// };

// <--Display Song Lyrics-->:
const displayLyrics = lyrics => {
    const lyricsDiv = document.getElementById('song-lyrics');

    lyricsDiv.innerText = lyrics;

}