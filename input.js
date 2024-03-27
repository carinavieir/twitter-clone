function submitTweet() {
    var tweetInput = document.getElementById('tweet-input').value;
    var tweetOutput = document.getElementById('tweet-output');

    if (tweetInput.trim() !== '') {
        const inputField = document.getElementById('tweet-input');
        const inputValue = inputField.value;
        const inputsContainer = document.getElementById('tweet-output');

        const newDiv = document.createElement('div');
        newDiv.textContent = inputValue;
        inputsContainer.appendChild(newDiv);
        inputField.value = '';;
    } else {
        alert('Please enter a tweet!');
    }
}

