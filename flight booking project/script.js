document.getElementById("booking-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get user input
  var name = document.getElementById("name").value;
  var destination = document.getElementById("destination").value;
  var date = document.getElementById("date").value;

  // Display booking details
  var bookingDetails = document.getElementById("booking-details");
  bookingDetails.innerHTML = "<h2>Booking Details:</h2>" +
    "<p><strong>Name:</strong> " + name + "</p>" +
    "<p><strong>Destination:</strong> " + destination + "</p>" +
    "<p><strong>Date:</strong> " + date + "</p>";
});
