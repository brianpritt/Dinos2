var Dino = require('./../js/dinosaur.js').dinoModule;
//global variables
var guessArray = [];
var finalDino = [];
var myDino = new Dino(1, 6);


var displayDinos = function(dinoList){
  finalDino = dinoList[0];
  var dinoId = 0;

  dinoList.forEach(function(dinoName) {
    $("#game-board").append('<p id="' + dinoId + '" class = "name" value =" ' + dinoName + '">' + dinoName + '</p>');
    dinoId +=1;
  });
  //gameplay starts here
  $("#game-board").children().click(function(){
    var dino = $(this).attr("value");
    guessArray.push(dino);
    console.log(guessArray);
    if (guessArray.length === 2) {
       var matchingDinos = myDino.isMatch(guessArray);
      if (matchingDinos === true){
        var dinoNameValue = guessArray[0];
        var removeValue = $("p").attr("value");
        console.log(dinoNameValue);
        guessArray = [];
      }else{
        guessArray = [];
      }
      }
    });
};


$(document).ready(function() {

  var response = myDino.getDinos(displayDinos);

});
