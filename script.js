function updateTimer() {
            let timerElement = document.getElementById("timer");
            let currentDate = new Date();

            // Extract date components
            let day = currentDate.getDate();
            let month = currentDate.getMonth() + 1; // Months are zero-based
            let year = currentDate.getFullYear();
            
            // Extract time components
            let hours = currentDate.getHours();
            let minutes = currentDate.getMinutes();
            let seconds = currentDate.getSeconds();

            // Format the date and time
            let formattedDate = `${day}/${month}/${year}`;
            let formattedTime = `${hours}:${minutes}:${seconds}`;

            // Update the content of the timer element
            timerElement.textContent = `${formattedDate}, ${formattedTime}`;
        }

        // Call the updateTimer function initially and set it to update every second
        updateTimer();
        setInterval(updateTimer, 1000);