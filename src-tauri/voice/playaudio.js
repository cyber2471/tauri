// const player = require('play-sound')(opts = {})

// import player from 'play-sound';

// // Path to your audio file
// const audioFilePath = 'C:/devStage/etc/DID Sound/sound_1.wav'; 

// player.play(audioFilePath, function(err){
// //   if (err) throw err
// //   console.log('Audio playback started');
// if (err) console.error('파일 재생 오류:', err);
//   else console.log('오디오 재생 시작됨');

// })

// const { Player } = require('node-wav-player');
import Player from 'node-wav-player';

Player.play({
  path: 'C:/devStage/etc/DID Sound/sound_hook2.wav',
}).then(() => {
  console.log('오디오 재생 시작됨');
}).catch((error) => {
  console.error(error);
});