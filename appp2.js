let audioElement = new Audio('audio/1.mp3');
let masterplay = document.getElementById('masterplay');
let wave = document.getElementsByClassName('wave')[0];
let progressbar = document.getElementById('seek');
let songIndex = 0;
let masterPlaySong = document.getElementById('masterPlaySong');
let masterImg = document.getElementById('masterImg');
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        wave.classList.add('active2');
    } else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        wave.classList.remove('active2');

    }
})


function playPause() {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        wave.classList.add('active2');
    } else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        wave.classList.remove('active2');

    }
}
// creat Array
let songIteams = Array.from(document.getElementsByClassName('songItem'));
let songs = [{
    songName: "Sleep",
        filePath: "audio/1.mp3",
        imgPath: "./img/1.jpg"
    },
    {
        songName: "Dance",
        filePath: "audio/2.mp3",
        imgPath: "./img/2.jpg"
    },
    {
        songName: "Fire",
        filePath: "audio/3.mp3",
        imgPath: "./img/3.jpg"
    },
    {
        songName: "Dark",
        filePath: "audio/4.mp3",
        imgPath: "./img/4.jpg"
    },
    {
        songName: "Lessgo!",
        filePath: "audio/LESSGO!.mp3",
        imgPath: "./img/5.jpg"
    }
]


songIteams.forEach((Element, i) => {
    console.log(Element, i);
    Element.getElementsByTagName("h5")[0].innerText = songs[i].songName;
})
document.onkeydown = function(event) {
    switch (event.keyCode) {

        case 32:
            playPause();
            break;

    }
};
let myProgressBar = document.getElementById('myProgressBar');
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


let recent_volume = document.getElementById('myProgressBar2');

function volume_change() {
    audioElement.volume = recent_volume.value / 100;
}
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        // e.target.classList.remove('fa-play');
        // e.target.classList.add('fa-pause');
        audioElement.src = `audio/${songIndex+1}.mp3`;
        masterPlaySong.innerText = songs[songIndex].songName;
        masterImg.src = songs[songIndex].imgPath;

        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
    })
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex < 1) {
        songIndex = 4;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `audio/${songIndex+1}.mp3`;
    masterPlaySong.innerText = songs[songIndex].songName;
    masterImg.src = songs[songIndex].imgPath;

    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove("fa-play");
    masterplay.classList.add("fa-pause");
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 4) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `audio/${songIndex+1}.mp3`;
    masterPlaySong.innerText = songs[songIndex].songName;
    masterImg.src = songs[songIndex].imgPath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove("fa-play");
    masterplay.classList.add("fa-pause");
})