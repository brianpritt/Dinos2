var Dino = require('./../js/dinosaur.js').dinoModule;



var finalDino = [];

var displayDinos = function(dinoList){
  finalDino = dinoList[0];
  var dinoId = 0;

  dinoList.forEach(function(dinoName) {
    $("#game-board").append('<p id="' + dinoId + '" class = "name ' + dinoName + '">' + dinoName + '</p>');
    dinoId +=1;
  });
};

$(document).ready(function() {
  var words = 6;
  var myDino = new Dino(1, words);
  var response = myDino.getDinos(displayDinos);
  $("#game-board").click(function(){
    console.log(this.id);
  });
});
