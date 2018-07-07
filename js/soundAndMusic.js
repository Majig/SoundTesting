var audioFormat;

function setFormat() {
    var audio = new Audio();
    if (audio.canPlayType("audio/mp3")) {
        audioFormat = ".mp3";
    } else {
        audioFormat = ".ogg";
    }
}

function soundOverlapsClass(fileNameWithPath) {
    setFormat();

    var mainSound = new Audio(fileNameWithPath + audioFormat);
    var altSound = new Audio(fileNameWithPath + audioFormat);

    var altSoundTurn = false;


    this.play = function () {
        if (altSoundTurn) {
            altSound.currentTime = 0;
            altSound.play();
        } else {
            mainSound.currentTime = 0;
            mainSound.play();
        }

        altSoundTurn = !altSoundTurn;
    }
}

function backgroundMusicClass () {
    var musicSound = null;

    this.loopSong = function (fileNameWithPath) {
        setFormat();

        if (musicSound != null) {
            musicSound.pause();
            musicSound = null;
        }

        musicSound = new Audio (fileNameWithPath + audioFormat);
        musicSound.loop = true;
        musicSound.play();
    }

    this.startOrStopMusic = function () {
        if (musicSound.paused) {
            musicSound.play();
        } else {
            musicSound.pause();
        }
    }
}