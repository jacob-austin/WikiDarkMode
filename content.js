let darkModeEnabled = false;

function toggleDarkMode() {
  darkModeEnabled = !darkModeEnabled;
  document.body.style.backgroundColor = darkModeEnabled ? '#222' : '#fff';
  document.body.style.color = darkModeEnabled ? '#fff' : '#000';
}

/**
 * Adds an event listener to detect changes from the extension popup
 */
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.message === "toggle_dark_mode") {
        toggleDarkMode();
      }
    }
  );