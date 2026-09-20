const copyButtonVid = document.getElementById('copyButtonVid');
copyButtonVid.addEventListener('click', async () => {
  const video = document.getElementById("expandedVid"); // Assuming you have a video element with this ID
  const videoUrl = video.src;
  if (!video.complete) {
    showToast("Video is still loading...");
    return;
  }
  try {
    await navigator.clipboard.writeText(videoUrl);
    showToast("Video URL successfully copied to clipboard!");
  } catch (err) {
    showToast("Failed to copy video URL. " + err.message);
  }
});