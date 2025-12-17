document.getElementById("btnlocateavatars").onclick = function() {
  var btnClose = document.getElementById("btnclosewindows");
  document.getElementById("iAvatars").style.right = "0%";
  document.getElementById("plustitle").style.opacity = "0";
  document.getElementById("plustitleAvatars").style.opacity = "1";
  btnClose.style.marginTop = "0%";
  btnClose.style.borderBottom = "none";
  document.body.style.overflowY = "hidden";
}
