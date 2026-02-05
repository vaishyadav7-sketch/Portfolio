// Register Service Worker (use relative path for GitHub Pages / subfolder hosting)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(() => console.log("Service Worker Registered"))
      .catch((err) => console.log("SW error:", err));
  });
}

// Notifications should NOT auto-popup on page load.
// Only request permission on user action (button click).
// Example usage:
// call requestNotifications() from a button click.
function requestNotifications() {
  if (!("Notification" in window)) return;

  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      new Notification("Welcome to My Portfolio PWA!");
    }
  });
}
