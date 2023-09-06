import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new VimeoPlayer(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}

currentTime();

function currentTime() {
  const savedData = JSON.parse(
    localStorage.getItem('videoplayer-current-time')
  );

  if (savedData) {
    player.setCurrentTime(savedData.seconds);
  }
}
