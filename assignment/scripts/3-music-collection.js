console.log('***** Music Collection *****')

let collection = [];

// addToCollection function creates an object using the title, artist, and year published input.
// The object is added to the collection.
function addToCollection(titleInput, artistInput, yearPublishedInput) {
  let album = {
    title: titleInput,
    artist: artistInput,
    yearPublished : yearPublishedInput
  }
  collection.push(album);
  return album;
}

// Testing the addToCollection function
console.log("Album added:", addToCollection("Immunity", "Clairo", "08/02/2019"));
console.log("Album added:", addToCollection("Is This It", "The Strokes", "07/30/2001"));
console.log("Album added:", addToCollection("Divers", "Joanna Newsom", "10/23/2015"));
console.log("Album added:", addToCollection("Come Away with Me", "Norah Jones", "02/26/2002"));
console.log("Album added:", addToCollection("Dear Catastrophe Waitress", "Belle and Sebastian", "10/06/2003"));
console.log("Album added:", addToCollection("Good at Falling", "The Japanese House", "03/01/2019"));
console.log("The collection now contains: ",collection);
