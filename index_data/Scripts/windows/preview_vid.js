function showVideo(videos) {
  const videopreviewbase = document.getElementById("videopreviewbase");
  ex4.src = videos.src;
  videopreviewbase.style.right = "0%";
  document.body.style.overflowY = "hidden";
  document.getElementById("iStickers").style.opacity = "0";
  document.getElementById("iAvatars").style.opacity = "0";
  document.getElementById("iWallpapers").style.opacity = "0";
  ex4.addEventListener('loadedmetadata', function() {
    ex4.currentTime = 0;
    ex4.play();
  });
};
function closePreviewVid() {
  const videopreviewbase = document.getElementById("videopreviewbase");
  document.getElementById("iStickers").style.opacity = "1";
  document.getElementById("iAvatars").style.opacity = "1";
  document.getElementById("iWallpapers").style.opacity = "1";
  videopreviewbase.style.right = "-100%";
  document.body.style.overflowY = "auto";
  ex4.pause();
}