document.addEventListener("visibilitychange", function () {
  let video = document.querySelector("video");
  if (!video) return; // Ensure video exists

  if (document.visibilityState === "visible") {
    video.play().catch((error) => {
      console.log("Playback prevented:", error);
    });
  } else {
    video.pause(); // Pause instead of reloading
  }
});
