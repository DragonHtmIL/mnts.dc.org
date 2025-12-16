document.getElementById("btnclosewindows").onclick = function() {
  const iStickers = document.getElementById("iStickers");
  const iAvatars = document.getElementById("iAvatars");
  const iWallpapers = document.getElementById("iWallpapers");
  var btnClose = document.getElementById("btnclosewindows");
  if(iStickers.style.right === "0%") {
    iStickers.style.right = "-100%";
  }else
  if(iAvatars.style.right === "0%") {
    iAvatars.style.right = "-100%";
  }else
  if(iWallpapers.style.right === "0%") {
    iWallpapers.style.right = "-100%";
  }else{
    unknownError();
  }
  btnClose.style.borderBottom = "solid 2px var(--border)";
  btnClose.style.marginTop = "-52px";
  document.getElementById("plustitle").style.opacity = "1";
  document.getElementById("plustitleStickers").style.opacity = "0";
  document.getElementById("plustitleAvatars").style.opacity = "0";
  document.getElementById("plustitleWallpapers").style.opacity = "0";
  document.body.style.overflowY = "auto";
}