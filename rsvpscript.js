document.getElementById("RSVPForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;

  if (name === "") {
    alert("Please enter your name.");
  } else {
    document.getElementById("message").textContent =
      "Thank you for your RSVP, " + name + "!";
  }
});