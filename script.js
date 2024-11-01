//your JS code here. If required.
// Function to set a cookie
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

// Function to get a cookie
function getCookie(name) {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(name + '='))
    ?.split('=')[1];
}

// Apply the saved preferences
function applyPreferences() {
  const savedFontSize = getCookie('fontsize');
  const savedFontColor = getCookie('fontcolor');

  if (savedFontSize) {
    document.body.style.fontSize = `${savedFontSize}px`;
    document.getElementById('fontsize').value = savedFontSize;
  }
  if (savedFontColor) {
    document.body.style.color = savedFontColor;
    document.getElementById('fontcolor').value = savedFontColor;
  }
}

// Save preferences when the form is submitted
document.getElementById('preferencesForm').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  const fontSize = document.getElementById('fontsize').value;
  const fontColor = document.getElementById('fontcolor').value;

  setCookie('fontsize', fontSize, 30); // Save font size for 30 days
  setCookie('fontcolor', fontColor, 30); // Save font color for 30 days

  applyPreferences(); // Apply preferences immediately
});

// Apply preferences on page load
applyPreferences();
