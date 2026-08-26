document.getElementById("btnlocatestickers").onclick = function() {
  const btnClose = document.getElementById("btnclosewindows");
  document.getElementById("iStickers").classList.add("opened");
  btnClose.classList.add("winOpened");
  document.body.style.overflowY = "hidden";

  document.getElementById("plustitle").style.opacity = "0";
  document.getElementById("plustitleAvatars").style.opacity = "1";
}