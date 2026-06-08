function showImage(imgs) {
  var imagepreviewbase = document.getElementById("imagepreviewbase");
  ex2.src = imgs.src;
  imagepreviewbase.style.right = "0%";
  document.body.style.overflowY = "hidden";
  setTimeout(() => {
    imagepreviewbase.style.backgroundColor = "var(--opacity-color)";
    imagepreviewbase.style.backdropFilter = "blur(5px)";
  },340);
};
function closeImgPreview() {
  var imagepreviewbase = document.getElementById("imagepreviewbase");
  imagepreviewbase.style.backgroundColor = "transparent";
  imagepreviewbase.style.backdropFilter = "blur(0px)";
  setTimeout(() => {
    imagepreviewbase.style.right = "-100%";
    document.body.style.overflowY = "auto";
  },340);
};