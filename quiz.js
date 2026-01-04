// Step 1: Define the function named checkAnswer
function checkAnswer() {
    // Step 2: Identify the Correct Answer
    const correctAnswer = "4";

    // Step 3: Retrieve the User’s Answer
    // We use querySelector to find the radio button that is currently 'checked'
    const selectedRadioButton = document.querySelector('input[name="quiz"]:checked');
    
    // Safety check: ensure a radio button was actually selected before accessing .value
    if (selectedRadioButton) {
        const userAnswer = selectedRadioButton.value;
        const feedbackElement = document.getElementById('feedback');

        // Step 4: Compare the User’s Answer with the Correct Answer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        // Optional: Handle case where no answer is selected
        document.getElementById('feedback').textContent = "Please select an answer first.";
    }
}

// Step 5: Add an Event Listener to the Submit Button
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
