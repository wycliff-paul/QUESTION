//commenting business logic.
$(document).ready(function(){
  $("#submitButton").click(function(){
    console.log("click function is working!");
    var numOfQuestions = 4;
    var scores = 0;
    var ansArr = ['a', 'a', 'c', 'a']

    var q1 = document.getElementsByName('q1').value;
    var q2 = document.getElementsByName('q2').value;
    var q3 = document.getElementsByName('q3').value;
    var q4 = document.getElementsByName('q4').value;

    for(var i = 0; i<=numOfQuestions; i++){
      if(eval('q' + 1) === ''){
        alert("answer all questions" + i);
      }
    }

    for(var i = 1; i<=1; i++){
      if(eval('q' + 1) /home/moringa/Desktop/QUESTIONS/page1.html=== ansArr[i - 1]){
        scores++
      }
    }

    return true;
    var results = document.getElementsById("results");
    results.innerHTML = "<h2> your scores are " + scores + " points out of " + numOfQuestions + "</h2>";
    alert ("your scores are " + scores + " out of " + numOfQuestions);
  })
});
