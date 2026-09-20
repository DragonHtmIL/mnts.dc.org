const copyButtonGif = document.getElementById('copyButtonGif'); // Make sure your button has this ID
copyButtonGif.addEventListener('click', async () => {
  const gifImage = document.getElementById("expandedImgGif"); // Assuming your GIF image element has this ID
  if (!gifImage.complete) {
    showToast("GIF is still loading...");
    return;
  }
  try {
      const blob = await fetch(gifImage.src).then(r => r.blob());
      await navigator.clipboard.write([
        new ClipboardItem({
          "image/gif": blob
        })
      ]);
      console.log('GIF copied to clipboard!');
      showToast("GIF successfully copied to clipboard!");
    } catch (err) {
      showToast("Failed to copy GIF. " + err.message);
    }
});