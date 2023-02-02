const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki. Bosonto kale tomai bolte pari nai. Kala kala sada sada ';

// this is Split Example
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('')
console.log(parts);
console.log(sentences);
console.log(chars);

// this is slice Example

const partial = lyrics.slice(0, 7);
console.log(partial);

const partial2 = lyrics.substring(0, 8);
console.log(partial2);

const lines = [
  'Tumi bondhu kala Pakhi ami jeno ki',
  'Bosonto kale tomai bolte pari nai',
  'Kala kala sada sada ',
  'Rong jomece sada kala',
];
const newSong = lines.join('. ');
console.log(newSong);
