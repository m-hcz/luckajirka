// Set the target date
const targetDate = new Date("2025-09-06T13:00:00").getTime();
//const targetDate = new Date("2025-04-28T18:42:30").getTime();

// Update the countdown every second
const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // If the countdown is finished
  if (distance <= 0) {
    clearInterval(countdown);
    return;
  }

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = formatTime(hours);
  document.getElementById("minutes").innerText = formatTime(minutes);
  document.getElementById("seconds").innerText = formatTime(seconds);

  
}, 1000);

function formatTime(unit) {
    return unit < 10 ? "0" + unit : unit;
  }