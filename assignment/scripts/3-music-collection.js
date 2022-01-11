console.log('***** Music Collection *****')

let collection = [];

// Creating the addToCollection function.
// This creates an object using the title, artist, and year published input.
// The object is then added to the collection.
function addToCollection(titleInput, artistInput, yearPublishedInput) {
  let album = {
    title: titleInput,
    artist: artistInput,
    yearPublished : yearPublishedInput
  }
  collection.push(album);
  return album;
}

// Testing the addToCollection function.
console.log("Album added:", addToCollection("Immunity", "Clairo", "2019"));
console.log("Album added:", addToCollection("Is This It", "The Strokes", "2001"));
console.log("Album added:", addToCollection("Divers", "Joanna Newsom", "2015"));
console.log("Album added:", addToCollection("Come Away with Me", "Norah Jones", "2002"));
console.log("Album added:", addToCollection("Dear Catastrophe Waitress", "Belle and Sebastian", "2003"));
console.log("Album added:", addToCollection("Good at Falling", "The Japanese House", "2019"));
console.log("The collection now contains:",collection);

// Creating the function showCollection to show the details of each album within.
function showCollection(array) {
  console.log("The number of albums in the collection are:",array.length);
  for (i=0; i<array.length; i++) {
    console.log(array[i].title, "by", array[i].artist, "published in", array[i].yearPublished);
  }
}

// Testing hte showCollection function.
showCollection(collection);
