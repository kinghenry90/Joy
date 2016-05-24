
var numQues = 3;
var numChoi = 3;

var answers = new Array(5);
answers[0] = "a";
answers[1] = "a";
answers[2] = "a";


function getScore2(form) {
  var score = 0;
  var currElt;
  var currSelection;

  for (i=0; i<numQues; i++) {
    currElt = i*numChoi;
    for (j=0; j<numChoi; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        if (currSelection.value == answers[i]) {
          score++;
          break;
        }
      }
    }
  }

  score = Math.round(score/numQues*100);
  form.percentage2.value = score + "%";

  var correctAnswers = "";
  for (i=1; i<=numQues; i++) {
    correctAnswers += i + ". " + answers[i-1] + "\r\n";
  }
  form.solutions2.value = correctAnswers;

}