function Dino(paragraphSize, nameList) {
  this.paragraphSize = paragraphSize;
  this.nameList = nameList;
}
Dino.prototype.getDinos = function(displayFunction){
   $.get('http://dinoipsum.herokuapp.com/api/?format=json&words=' + this.nameList + '&paragraphs=' + this.paragraphSize).then(function(response){
     displayFunction(response);
    console.log(response);
  }).fail(function(error){
    console.log(error);
  });
}

exports.dinoModule = Dino;
