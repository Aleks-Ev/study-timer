export function initNotifications() {
  const container = document.getElementById("notifications");

  container.innerHTML = `
    <h2>Notifications</h2>
    <button id="notify">Test Notification</button>
  `;

  container.querySelector("#notify").onclick = () => {
    if (!("Notification" in window)) {
      alert("Notifications not supported");
      return;
    }

    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        new Notification("Study Planner", {
          body: "Time to study!"
        });
      }
    });
  };
}
