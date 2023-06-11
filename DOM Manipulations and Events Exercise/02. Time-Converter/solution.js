function attachEventsListeners() {
    let daysElement = document.getElementById("days");
    let hoursElement = document.getElementById("hours");
    let minutesElement = document.getElementById("minutes");
    let secondsElement = document.getElementById("seconds");

    document.getElementById("daysBtn").addEventListener("click", onClick);
    document.getElementById("hoursBtn").addEventListener("click", onClick);
    document.getElementById("minutesBtn").addEventListener("click", onClick);
    document.getElementById("secondsBtn").addEventListener("click", onClick);

    let basics = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    function click(value, id) {
        let days = value / basics[id];

        return {
            days: days,
            hours: days * basics.hours,
            minutes: days * basics.minutes,
            seconds: days * basics.seconds,
        }

    }

    function onClick(event) {
        let input = event.target.parentElement.querySelector("input[type='text']");
        let time = click(Number(input.value), input.id)
        
        daysElement.value = time.days;
        hoursElement.value = time.hours;
        minutesElement.value = time.minutes;
        secondsElement.value = time.seconds;

    }

}