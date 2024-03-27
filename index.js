function submitTweet() {
    var tweetInput = document.getElementById('tweet-input').value;
    var tweetOutput = document.getElementById('tweet-output');

    if (tweetInput !== '') {
        let newTweetHTML = `
        <div class="middle-post">
        <div id="tweet-output" class="tweet-output"></div>
        <div class="profile-middle-post-text">
            
            <img src="img/profile-pic.jpg" class="profile-middle">
            <div class="post">
                <h5 class="h5-middle-post-text">Carina Vieira</h5> 
                <p class="middle-user-post">@carinaviru.s - 1h</p>
                <p class="actual-post">${tweetInput}</p> 

                <div class="middle-post-reaction-buttons">
                    <button class="buttons-reaction-comments">
                        <img src="img/comments-gray.png" height="20px" width="20px">
                    </button>
                    <button class="buttons-reaction-retweet">
                        <img src="img/retweet-gray.png" height="20px" width="20px">
                    </button>
                    <button class="buttons-reaction-heart">
                        <img src="img/heart-gray.png" height="20px" width="20px">
                    </button>
                    <button class="buttons-reaction-chart">
                        <img src="img/chart-gray.png" height="20px" width="20px">
                    </button>
                    <button class="buttons-reaction-save">
                        <img src="img/save-gray.png" height="20px" width="20px">
                    </button>
                    <button class="buttons-reaction-share">
                        <img src="img/share-gray.png" height="20px" width="20px">
                    </button>
                </div>
            </div>
        </div> 
    </div>    
    `;
        const inputField = document.getElementById('tweet-input');
        const inputValue = inputField.value;
        const inputsContainer = document.getElementById('tweet-output');
        const newDiv = document.createElement('div');
        newDiv.innerHTML = newTweetHTML
        inputsContainer.appendChild(newDiv);
        inputField.value = '';
   }
}
