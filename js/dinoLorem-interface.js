var Dino = require('./../js/dinosaur.js').dinoModule;
//global variables
var myDino = new Dino(1, 6);

var guessArray = [];
var idArray = [];


var displayDinos = function(dinoList){
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
    $(".numberTries").text("Number of tries: " + myDino.myTries);

    if (guessArray.length === 2) {
      var matchingDinos = myDino.isMatch(guessArray);
      if(idArray[0] === idArray[1]){
        guessArray = [];
        idArray = [];

      }else if (matchingDinos === true){
        $("." + guessArray[0]).removeAttr("value").addClass("whiteBkgrd");
        myDino.myMatches += 1;
        myDino.myTries +=1;
        $(".numberTries").text("Number of tries: " + myDino.myTries);

        if (myDino.myMatches === 6){
          $(".gameOver").append("<h3>You Did It!</h3>");
        }
        guessArray = [];
        idArray = [];
      } else{
        guessArray = [];
        idArray = [];
        $("p").removeClass("white");
        myDino.myTries +=1;
        $(".numberTries").text("Number of tries: " + myDino.myTries);
      }
    }
  });
};

$(document).ready(function() {
  var response = myDino.getDinos(displayDinos);
});
