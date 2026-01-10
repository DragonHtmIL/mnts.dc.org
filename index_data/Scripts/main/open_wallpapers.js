document.getElementById("btnlocatewallpapers").onclick = function() {
  var btnClose = document.getElementById("btnclosewindows");
  document.getElementById("iWallpapers").style.right = "0%";
  document.getElementById("plustitle").style.opacity = "0";
  document.getElementById("plustitleWallpapers").style.opacity = "1";
  btnClose.style.marginTop = "0%";
  btnClose.style.borderBottom = "none";
  document.body.style.overflowY = "hidden";
}