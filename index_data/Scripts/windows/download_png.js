document.getElementById("downButton").addEventListener("click", function () {
  const image = document.getElementById("expandedImg");
  const time = document.getElementById("vartime").value;
  if (!image.complete) {
    showToast("Image is still loading...");
    return;
  }
  const link = document.createElement("a");
  link.href = image.src;
  link.download = time + ".png";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("Image successfully downloaded!");
});
function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  Object.assign(toast.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "12px 18px",
    background: "#222",
    color: "white",
    borderRadius: "8px",
    fontSize: "16px",
    zIndex: "99999"
  });
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}