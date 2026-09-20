function showImageGif(gifs) {
  const imagepreviewbase = document.getElementById("imagepreviewbasegif");
  ex3.src = gifs.src;
  imagepreviewbase.style.right = "0%";
  document.body.style.overflowY = "hidden";
  document.getElementById("iStickers").style.opacity = "0";
  document.getElementById("iAvatars").style.opacity = "0";
  document.getElementById("iWallpapers").style.opacity = "0";
};
function closeImgPreviewGif() {
  const imagepreviewbase = document.getElementById("imagepreviewbasegif");
  document.getElementById("iStickers").style.opacity = "1";
  document.getElementById("iAvatars").style.opacity = "1";
  document.getElementById("iWallpapers").style.opacity = "1";
  imagepreviewbase.style.right = "-100%";
  document.body.style.overflowY = "auto";
}