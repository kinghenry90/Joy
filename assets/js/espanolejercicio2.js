var numQues2 = 3;
var numChoi2 = 3;

var answers2 = new Array(3);
answers2[0] = "b";
answers2[1] = "a";
answers2[2] = "c";


function getScore2(form) {
  var score = 0;
  var currElt;
  var currSelection;

  for (i=0; i<numQues2; i++) {
    currElt = i*numChoi2;
    for (j=0; j<numChoi2; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        if (currSelection.value == answers2[i]) {
          score++;
          break;
        }
      }
    }
  }

  score = Math.round(score/numQues2*100);
  form.percentage.value = score + "%";

  var correctAnswers = "";
  for (i=1; i<=numQues2; i++) {
    correctAnswers += i + ". " + answers2[i-1] + "\r\n";
  }
  form.solutions.value = correctAnswers;

}