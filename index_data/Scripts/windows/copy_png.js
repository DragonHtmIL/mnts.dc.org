const copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click', async () => {
  const image = document.getElementById("expandedImg");
  if (!image.complete) {
    showToast("Image is still loading...");
    return;
  }
  try {
      const blob = await fetch(image.src).then(r => r.blob());
      await navigator.clipboard.write([
        new ClipboardItem({
          "image/png": blob
        })
      ]);
      showToast("Image successfully copied to clipboard!");
    } catch (err) {
      showToast("Failed to copy image. " + err.message);
    }
});