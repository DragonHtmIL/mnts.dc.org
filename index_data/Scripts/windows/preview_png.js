function showImage(imgs) {
  const imagepreviewbase = document.getElementById("imagepreviewbase");
  ex2.src = imgs.src;
  imagepreviewbase.style.right = "0%";
  document.body.style.overflowY = "hidden";
  document.getElementById("iStickers").style.opacity = "0";
  document.getElementById("iAvatars").style.opacity = "0";
  document.getElementById("iWallpapers").style.opacity = "0";
};
function closeImgPreview() {
  const imagepreviewbase = document.getElementById("imagepreviewbase");
  document.getElementById("iStickers").style.opacity = "1";
  document.getElementById("iAvatars").style.opacity = "1";
  document.getElementById("iWallpapers").style.opacity = "1";
  imagepreviewbase.style.right = "-100%";
  document.body.style.overflowY = "auto";
};