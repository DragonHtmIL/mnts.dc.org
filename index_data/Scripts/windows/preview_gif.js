function showImageGif(gifs) {
  var imagepreviewbase = document.getElementById("imagepreviewbasegif");
  ex3.src = gifs.src;
  imagepreviewbase.style.right = "0%";
  document.body.style.overflowY = "hidden";
  setTimeout(() => {
    imagepreviewbase.style.backgroundColor = "var(--opacity-color)";
    imagepreviewbase.style.backdropFilter = "blur(5px)";
  },340);
};
function closeImgPreviewGif() {
  var imagepreviewbase = document.getElementById("imagepreviewbasegif");
  imagepreviewbase.style.backgroundColor = "transparent";
  imagepreviewbase.style.backdropFilter = "blur(0px)";
  setTimeout(() => {
    imagepreviewbase.style.right = "-100%";
    document.body.style.overflowY = "auto";
  },340);
}