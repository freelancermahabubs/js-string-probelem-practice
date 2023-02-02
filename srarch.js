const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki. Bosonto kale tomai bolte pari nai. Kala kala sada sada ';

const searchString = 'PaKhi';
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('Pakhi');
// const doesExist = lyricsLowerCase.includes(searchString);
const lyricsLowerCase = lyrics.toLowerCase();

// const doesExist = lyrics.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
// console.log(doesExistOneLine);
// -------------------------------------

//indexOf
console.log(lyrics.indexOf('kalaya'));
console.log(lyrics.indexOf.apply('Tumi'));

if(lyrics.indexOf('sada') !== -1) {
  console.log('Exists inside the string')
}
else {
console.log('Cannot find it');
}

//startswith
console.log(lyrics.startsWith('Tumi'));

//ENDSsWith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
fileName.endsWith('.pdf')
