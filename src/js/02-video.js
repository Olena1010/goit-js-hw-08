import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const VCT_KEY = 'videoplayer-current-time';

timeToSet();

function onPlay ({ seconds }) {
    localStorage.setItem(VCT_KEY, seconds)
};
function timeToSet() {
    const currentTime = localStorage.getItem(VCT_KEY);

    if (currentTime) {
        player.setCurrentTime(currentTime)
    }
};
player.on('timeupdate', throttle(onPlay, 1000));