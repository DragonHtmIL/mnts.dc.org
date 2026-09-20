document.getElementById("downButtonGif").addEventListener("click", function () {
  const image = document.getElementById("expandedImgGif");
  const time = document.getElementById("downtime").value;
  if (!image.complete) {
    showToast("Image is still loading...");
    return;
  }
  const link = document.createElement("a");
  link.href = image.src;
  link.download = time + ".gif";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("Image successfully downloaded!");
});