/*
/ We're hoping to build our own javascript library here using ES6 
/ syntax. We're also looking to publish it to npm so we can say how
/ awesome we are (even though it's really not that big of a deal).
/ Check out some of the ES6 features here.
/
/ http://es6-features.org/#Constants
*/

/*
/ Constructs a piano class – a wrapper class for the Howler music player 
/ javascript library. I'm not married to the piano name, tell me if you
/ come up with something better.
*/
let piano = new Piano();

/*
/ Plays a particular note. Takes a string representing that key C0 to F8.
/ We don't need all of those notes quite yet though.
*/
piano.playNote('C3');

/*
/ Plays multiple notes in order. Takes an array of strings representing
/ the notes we want to play. Other conditions of playback will be set
/ using other functions listed here.
*/
piano.playSeries(['C3', 'G3', 'F3', 'C3']);

/*
/ Sets the timbre of the sound used in playback. Not a huge priority
/ right now, but i'd like to eventually give the option.
*/
piano.setInstrument('guitar');

/*
/ Sets the tempo of playback when calling play functions
*/
piano.setTempo(120);

/*
/ Sets the tonic note and type of key. Allows users to use a play by
/ intervals and numbers, making it easier on the calling class we're
/ going to develop eventually.
*/
piano.setKey('C3', 'major');

/*
/ Plays a particular note depending on the set key. Given the key set
/ in the previous function, this function call should play G3.
*/
piano.playNoteByNumber(5);

/*
/ Plays multiple notes in order. Takes an array of strings representing
/ the notes we want to play. Given a key of C3, this would play C3, G3,
/ F3, C3
*/
piano.playSeriesByNumber([1,5,4,1]);

/*
/ Sets all Settings used for playback with a single function call. Takes
/ a JSON object set up kinda like this. We can work that out later though.
*/
piano.loadSettings({ instrument: "guitar", tempo: 120, key: { tonic: 'C3', mode:'major'} });
