document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("bgVideo");
  var popup = document.querySelector(".popup"); // Update this selector with your actual popup class

  video.addEventListener("ended", function () {
    // Show the popup when the video ends
    popup.classList.remove("hidden");
  });
});
