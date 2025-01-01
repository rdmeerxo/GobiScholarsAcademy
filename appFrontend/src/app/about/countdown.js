// countdown.js
document.addEventListener('DOMContentLoaded', () => {
    const countdownDate = new Date("Nov 15, 2024 23:59:59").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        if (distance < 0) {
            document.querySelector('.coming-soon-title').innerText = "We Have Launched!";
            document.querySelector('.countdown').style.display = "none";
        }
    }

    setInterval(updateCountdown, 1000);
});
