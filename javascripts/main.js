console.log('This would be the main JS file.');
var numberOfFaces = 5;
var leftSide = document.getElementById("leftSide");
function generateFaces(){
     var number = numberOfFaces;
     while(true){
         var face = document.createElement("img");
         face.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
         var top_position = Math.floor(Math.random() * 300 );
         var left_position = Math.floor(Math.random() * 400 );
         face.style.top = top_position + "px";
         face.style.left = left_position + "px";
         leftSide.appendChild(face);
         number -= 1;
         if (number == 0) break;
      };

      var rightSide = document.getElementById("rightSide");
      var leftSideImages = leftSide.cloneNode(true);
      leftSideImages.removeChild(leftSideImages.lastChild);
      rightSide.appendChild(leftSideImages);

      var thebody = document.getElementById("thebody");
      leftSide.lastChild.onclick = function nextLevel(event){
          event.stopPropagation();
          while(leftSide.firstChild){
              leftSide.removeChild(leftSide.firstChild)
          };
          while(rightSide.firstChild){
              rightSide.removeChild(rightSide.firstChild)
          };
          numberOfFaces += 5;
          generateFaces();
      };

      thebody.onclick = function gameOver() {
           alert("Game Over!");
           thebody.onclick = null;
           theLeftSide.lastChild.onclick = null;
        };
};
