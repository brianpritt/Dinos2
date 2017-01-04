var Dino = require('./../js/dinosaur.js').dinoModule;
var finalDino = [];
var displayDinos = function(dinoList){
  finalDino = dinoList[0];
  var dinoId = 0;
  finalDino.forEach(function(dinoName) {
    $("#game-board").append('<div id="' + dinoId + '" class = "' + dinoName + '">' + dinoName + '</div>');
    dinoId +=1;
  });
};

$(document).ready(function() {
  var words = 4;
  var myDino = new Dino(1, words);
  var response = myDino.getDinos(displayDinos);

});
