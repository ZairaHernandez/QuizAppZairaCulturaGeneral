function gettimeRenaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());

  const seconds = Math.floor((total / 1000) % 60);

  const minutes = Math.floor((total / 1000 / 60) % 60);
  return {
    total,
    minutes,
    seconds,
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const minutesSpan = clock.querySelector(".minutes");
  const secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    const t = gettimeRenaining(endtime);

    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      tryAgainButton.style.display = "inline-block";
      clearInterval(timeinterval);
      showResults();
      submitButton.style.display = "none";
      previusButton.style.display = "none";
      nextButton.style.display = "none";
    } else {
      tryAgainButton.style.display = "none";
    }
  }
  updateClock();

  const timeinterval = setInterval(updateClock, 1000);
}
function resetQuiz() {
  location.reload();
}

const deadline = new Date(Date.parse(new Date()) + 1.5 * 600 * 100);

const tryAgainButton = document.getElementById("tryAgain");

initializeClock("clockdiv", deadline);
tryAgainButton.addEventListener("click", resetQuiz);
