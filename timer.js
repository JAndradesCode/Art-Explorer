//Timer to track how long the user has been on the page
function startTimer(){
    console.log("Starting session timer"); //debug log

    //check if timer already exists to prevent duplicates
    if(document.getElementById('sessionTimer')){
        console.log('Timer already exists, not creating a new one');
        return;
    }

    //initialize session timer at 0 seconds
    let sessonSeconds = 0;

    //create timer display element
    const timerElement = document.createElement('div');
    timerElement.id = "sessionTimer";
    timerElement.style.marginTop = "20px";
    timerElement.style.textAlign = "center";
    document.body.appendChild(timerElement);

    //update timer display initially
    updateTimerDisplay(timerElement, sessonSeconds);

    //update timer every second
    let timerInterval = setInterval(()=>{
        sessonSeconds++;
        updateTimerDisplay(timerElement, sessonSeconds);

        //store current time in sessionStorage (automatically cleared when tab closes)
        sessionStorage.setItem('timeOnPage', sessonSeconds.toString());

        //trigger special message for long sessions (over 5 minutes)
        if(sessonSeconds===300){
            showLongSessionMessage();
        }
    }, 1000);

    //when page is about to unload, stop the timer
    window.addEventListener('beforeunload', ()=>{
        console.log('Page unloading, stopping timer'); //debug log
        clearInterval(timerInterval);
    });

    //helper function to format and display time
    function updateTimerDisplay(element, totalSeconds){
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        let timeText = 'Time on page: ';

        if(hours > 0){
            timeText += `${hours}h `;
        }
        if(hours > 0 || minutes > 0){
            timeText += `${minutes}m `;
        }
        timeText += `${seconds}s`;

        element.textContent = timeText;
    };

    //show special message for users spending a long time on the site
    function showLongSessionMessage(){
        console.log('Showing long session message for (5 minutes)'); //debug log

        //check if message already exists to prevent duplicates
        if(document.getElementById('longSessionMessage')){
            console.log('Long session message already exists, not creating new one');
            return;
        }

        const messageDiv = document.createElement('div');
        messageDiv.id = "longSessionMessage";
        messageDiv.innerHTML=
        `<p>You've been exploring for 5 minutes! Thank you for your interest in Art Explorer.</p>
        <button id="dismissMessage">Dismiss</button>`;

        //check if timer element exists
        const timerElement = document.getElementById('sessionTimer');
        if(timerElement){
            document.body.insertBefore(messageDiv, timerElement);
        }
        else{
            document.body.appendChild(messageDiv);
        }

        //add event listener to dismiss button
        const dismissButton = document.getElementById('dismissMessage');
        if(dismissButton){
            dismissButton.addEventListener('click', ()=>{
                const message = document.getElementById('longSessionMessage');
                if(message){
                    message.remove();
                }
            });
        }
    };
}
startTimer();