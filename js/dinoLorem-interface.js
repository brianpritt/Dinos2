var Dino = require('./../js/dinosaur.js').dinoModule;



var finalDino = [];

var displayDinos = function(dinoList){
  finalDino = dinoList[0];
  var dinoId = 0;

  dinoList.forEach(function(dinoName) {
    $("#game-board").append('<div id="' + dinoId + '" class = "name ' + dinoName + '">' + dinoName + '</div>');
    dinoId +=1;

  });
};

$(document).ready(function() {
  var words = 4;
  var myDino = new Dino(1, words);
  var response = myDino.getDinos(displayDinos);
  $("#0, #1, #2, #3, #4, #5, #6, #7").click(function(){
    console.log("hi");
  });
});
