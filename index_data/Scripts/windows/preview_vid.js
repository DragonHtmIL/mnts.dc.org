function showImageGif(videos) {
  var imagepreviewbase = document.getElementById("imagepreviewbasevid");
  ex4.src = videos.src;
  imagepreviewbase.style.right = "0%";
  document.body.style.overflowY = "hidden";
  setTimeout(() => {
    imagepreviewbase.style.backgroundColor = "var(--opacity-color)";
    imagepreviewbase.style.backdropFilter = "blur(5px)";
  },340);
};
function closeImgPreviewVid() {
  var imagepreviewbase = document.getElementById("imagepreviewbasevid");
  imagepreviewbase.style.backgroundColor = "transparent";
  imagepreviewbase.style.backdropFilter = "blur(0px)";
  setTimeout(() => {
    imagepreviewbase.style.right = "-100%";
    document.body.style.overflowY = "auto";
  },340);
}