var sound:Sound;
var channel:SoundChannel;
var pos:Number;
var numLoops:Number = 0; // 0 to loop forever

sound = new Sound();
sound.load( new URLRequest("song.mp3") );
channel = sound.play( 0, numLoops );
