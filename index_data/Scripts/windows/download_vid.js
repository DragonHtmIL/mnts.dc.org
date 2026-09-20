document.getElementById("downButtonVid").addEventListener("click", function () {
  const video = document.getElementById("expandedVid");
  const time = document.getElementById("downtime").value;
  if (!video.complete) {
    showToast("Video is still loading...");
    return;
  }
  const link = document.createElement("a");
  link.href = video.src;
  link.download = time + ".mp4";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("Video successfully downloaded!");
});