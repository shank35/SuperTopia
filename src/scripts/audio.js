import {Howl} from "howler"

// import audioDie from "../audio/audioMinecraftDie.mp3"
import audioDie from "../audio/audioDie.mp3"
import audioGameOver from "../audio/audioGameOver2.mp3"
import audioJump from "../audio/audioJump.mp3"
import audioMusicLevel1 from "../audio/audioMusicLevel1.mp3"
// import audioMusicLevel1 from "../audio/audioNeverDie.mp3"
import audioCompleteLevel from "../audio/audioCompleteLevel.mp3"
import audiogoombaSquash from "../audio/goombaSquash.mp3"


export const audio = {
  die: new Howl({src: [audioDie], volume: 0.2}),
  gameOver: new Howl({src: [audioGameOver], volume: 0.4}),
  jump: new Howl({src: [audioJump], volume: 0.2}),
  musicLevel1: new Howl({src: [audioMusicLevel1], volume: 0.1, loop: true, autoplay: true}),
  completeLevel: new Howl({src: [audioCompleteLevel], volume: 0.2}),
  goombaSquash: new Howl({src: [audiogoombaSquash], volume: 0.2})
}
