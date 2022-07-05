window.onload = function () {
    const buttonStart = document.getElementById ('btn-start');
    const buttonStop = document.getElementById ('btn-stop');
    const buttonReset = document.getElementById ('btn-reset');
    

    let counterSeconds = document.getElementById('seconds');
    let counterMinutes= document.getElementById('minutes');
    let counterHours = document.getElementById('hours');

    var seconds = 00;
    var minutes = 00;
    var hours = 00;

    var interval = 0;

    buttonStart.onclick = function start () {
        clearInterval(interval);
        interval = setInterval(timer, 1000);
       
    }

    buttonStop.onclick = function stop () {
        clearInterval(interval);
    }

    buttonReset.onclick = function reset () {
        clearInterval(interval);
        seconds="00";
        minutes="00";
        hours="00";

        counterSeconds.innerHTML = seconds;
        counterMinutes.innerHTML = minutes;
    }

    function timer () {
        seconds++;

        if (seconds <=9){
            counterSeconds.innerHTML = "0" + seconds;
        }

        if (seconds >9){
            counterSeconds.innerHTML = seconds;
        }

        if (seconds >59) {
            minutes++;
            counterMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            counterSeconds.innerHTML = "0" + seconds;
        }

        if (minutes > 9) {
            counterMinutes.innerHTML = minutes;
        }

        if (minutes >59) {
            hours++;
            counterHours.innerHTML = "0" + hours;
            minutes = 0;
            counterMinutes.innerHTML = "0" + minutes;
    }

    if (hours > 9) {
        counterHours.innerHTML = "0" + hours;
       
    }
 }

}