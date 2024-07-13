document.getElementById("checkButton").addEventListener("click", function () {
    var answer = document.getElementById("answer").value.toLowerCase();
    var correctAnswer = "software";
    var resultDiv = document.getElementById("result");

    if (answer === correctAnswer) {
        resultDiv.textContent = "Correct!";
        resultDiv.className = "result correct";
    } else {
        resultDiv.textContent = "Incorrect. Please try again.";
        resultDiv.className = "result incorrect";
    }
});
