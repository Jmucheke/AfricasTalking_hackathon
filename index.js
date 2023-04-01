// Africastalking API credentials
const apiKey = "YOUR_API_KEY";
const username = "YOUR_USERNAME";

// Form submission event listener
const form = document.querySelector("#sms-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const phoneNumber = document.querySelector("#phone-number").value;
  const message = document.querySelector("#message").value;
  sendSms(phoneNumber, message);
});

// Function to send SMS using Africastalking API
function sendSms(phoneNumber, message) {
  const params = {
    username: username,
    to: phoneNumber,
    message: message,
  };

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 201) {
        alert("SMS sent successfully!");
      } else {
        alert("Error sending SMS: " + xhr.responseText);
      }
    }
  };
  xhr.open("POST", "https://api.africastalking.com/version1/messaging");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("apiKey", apiKey);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send(encodeParams(params));
}

// Helper function to encode form data as URL encoded parameters
function encodeParams(params) {
  return Object.keys(params)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key]))
    .join("&");
}
