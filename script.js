let studyTime = 25 * 60; // 25 minutes
let timeLeft = studyTime;
let timerInterval = null;
let completedSessions = 0;

const timerDisplay = document.getElementById("timer");
const sessionsDisplay = document.getElementById("sessions");

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent =
    `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

document.getElementById("startBtn").addEventListener("click", () => {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    timeLeft--;
    updateDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      completedSessions++;
      sessionsDisplay.textContent = completedSessions;
      timeLeft = studyTime;
      updateDisplay();
      alert("Study session completed!");
    }
  }, 1000);
});

document.getElementById("pauseBtn").addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft = studyTime;
  updateDisplay();
});

updateDisplay();
