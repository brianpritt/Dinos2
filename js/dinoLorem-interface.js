var Dino = require('./../js/dinosaur.js').dinoModule;
//global variables
var guessArray = [];
var idArray = [];
var finalDino = [];
var myDino = new Dino(1, 6);
var totalMatches = 0;


var displayDinos = function(dinoList){
  finalDino = dinoList[0];
  var dinoId = 0;

  dinoList.forEach(function(dinoName) {
    $("#game-board").append('<p id="' + dinoId + '" class = "name ' + dinoName + '" value ="' + dinoName + '">' + dinoName + '</p>');
    dinoId +=1;
  });
  //gameplay starts here
  $("#game-board").children().click(function(){
    var dino = $(this).attr("value");
    $(this).addClass("white");
    guessArray.push(dino);
    idArray.push(this.id);
    if (guessArray.length === 2) {
      var matchingDinos = myDino.isMatch(guessArray);
      if(idArray[0] === idArray[1]){
        guessArray = [];
        idArray = [];
      }else if (matchingDinos === true){
        $("." + guessArray[0]).removeAttr("value").addClass("whiteBkgrd");
        totalMatches += 1;
        if (totalMatches === 6){
          $(".gameOver").append("<h3>You Did It!</h3>");
        }
        guessArray = [];
        idArray = [];
      } else{
        guessArray = [];
        idArray = [];
        $("p").removeClass("white");
      }
    }
  });
};


$(document).ready(function() {

  var response = myDino.getDinos(displayDinos);

});
