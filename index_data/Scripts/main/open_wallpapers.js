document.getElementById("btnlocatewallpapers").onclick = function() {
  const btnClose = document.getElementById("btnclosewindows");
  const winOpeners = document.querySelectorAll(".open-window");
  document.getElementById("iWallpapers").classList.add("opened");
  btnClose.classList.add("winOpened");
  for (let i = 0; i < winOpeners.length; i++) {
    winOpeners[i].classList.add("hide");
  }
  document.getElementById("footer").classList.add("hide");
  document.body.style.overflowY = "hidden";

  document.getElementById("plustitle").style.opacity = "0";
  document.getElementById("plustitleWallpapers").style.opacity = "1";
}