//document.getElementById("downButtonGif").addEventListener('click', function() {
//  const link = document.createElement('a');
//  link.href = document.getElementById("expandedImgGif").src;
//  link.download = document.getElementById("vartime").value + ".gif";
//  link.style.display = "none";
//  link.target = "_blank";
//  document.body.appendChild(link);
//  link.click();
//  document.body.removeChild(link);
//});
document.getElementById("downButtonGif").addEventListener("click", function () {
  const image = document.getElementById("expandedImgGif");
  const time = document.getElementById("vartime").value;
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
function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.className = "toast";
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}