function Dino(paragraphSize, nameList) {
  this.paragraphSize = paragraphSize;
  this.nameList = nameList;
}
Dino.prototype.getDinos = function(displayFunction){
   $.get('http://dinoipsum.herokuapp.com/api/?format=json&words=' + this.nameList + '&paragraphs=' + this.paragraphSize).then(function(response){
    var finalDino = response[0];

    //double deck
    var newDeck = [];
    for(i = 0; i <2; i++){
      finalDino.forEach(function(dinoName){
        newDeck.push(dinoName);
      });
    }

    //fisher-yates shuffle https://bost.ocks.org/mike/shuffle/
    var m = newDeck.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
    // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = newDeck[m];
        newDeck[m] = newDeck[i];
        newDeck[i] = t;
      }

    displayFunction(newDeck);

  }).fail(function(error){
    console.log(error);
  });
};

Dino.prototype.isMatch = function(match){
  if (match[0] == match[1]){
    console.log("match");
    return match;
  }else{
    return false;
  }
};


exports.dinoModule = Dino;
