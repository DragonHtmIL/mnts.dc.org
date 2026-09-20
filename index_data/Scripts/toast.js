function reflowToasts() {
  const toasts = document.querySelectorAll(".toast");
  toasts.forEach((toast, index) => {
    toast.style.bottom = `${index * 63 + 10}px`;
  });
}
function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.className = "toast";
  document.body.appendChild(toast);
  reflowToasts();
  setTimeout(() => {
    toast.style.right = "10px";
  }, 10);
  setTimeout(() => {
    toast.style.right = "-100%";
  }, 5000);
  setTimeout(() => {
    toast.remove();
    reflowToasts();
  }, 5600);
  toast.addEventListener("click", () => {
  toast.style.right = "-100%";
  setTimeout(() => {
    toast.remove();
    reflowToasts();
  }, 600);
  });
}