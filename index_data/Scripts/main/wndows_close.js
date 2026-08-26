document.getElementById("btnclosewindows").onclick = function() {
  const iStickers = document.getElementById("iStickers");
  const iAvatars = document.getElementById("iAvatars");
  const iWallpapers = document.getElementById("iWallpapers");
  const btnClose = document.getElementById("btnclosewindows");
  if(iStickers.classList.contains("opened")) {
    iStickers.classList.remove("opened");
  }else
  if(iAvatars.classList.contains("opened")) {
    iAvatars.classList.remove("opened");
  }else
  if(iWallpapers.classList.contains("opened")) {
    iWallpapers.classList.remove("opened");
  }else{
    unknownError();
  }
  btnClose.classList.remove("winOpened");
  document.getElementById("plustitle").style.opacity = "1";
  document.getElementById("plustitleStickers").style.opacity = "0";
  document.getElementById("plustitleAvatars").style.opacity = "0";
  document.getElementById("plustitleWallpapers").style.opacity = "0";
  document.body.style.overflowY = "auto";
}