const copyButtonVid = document.getElementById('copyButtonVid');
copyButtonVid.addEventListener('click', async () => {
  const video = document.getElementById("expandedImgVid"); // Assuming you have a video element with this ID
  const videoUrl = video.src;
  try {
    await navigator.clipboard.writeText(videoUrl);
    console.log('Video URL copied to clipboard!');
  } catch (err) {
    console.error('Failed to copy video URL: ', err);
  }
});