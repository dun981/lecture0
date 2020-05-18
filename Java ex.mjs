var collection = {

"2548":{
 "album": "Slippery when wet",
 "artist": "Bon Jovi",
 "tracks": [
    "Let it Rock",
    "You Give love a Bad Name"
  ]

},

"2468":{
  "album": "1999",
 "artist": "Prince",
 "tracks": [
    "1999",
    "Little Red Corvette"
  ]
},

  "1245":{
  "album": "Robert Palmer",
  "tracks": [ ]

},

"5439":{
"album":"ABBA Gold",
}

};

var collectionCopy = JSON.parse(JSON.stringify(collection));


function  updateRecords (id,prop,value) {
if (value === ""){
delete collection [id],[prop];

} else if (prop === "tracks") {
collection [id][prop] = collection [id][prop] || [];
collection [id][prop].push(value);
} else {
  collection[id][prop] = value;
}

  return collection;
}
updateRecords(2468,"tracks","kim i love you")
console.log(updateRecords(5439,"artist","ABBA"));
