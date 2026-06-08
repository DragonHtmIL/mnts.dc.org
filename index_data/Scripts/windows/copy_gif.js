const copyButtonGif = document.getElementById('copyButtonGif'); // Make sure your button has this ID
copyButtonGif.addEventListener('click', async () => {
  const gifImage = document.getElementById("expandedImgVid"); // Assuming your GIF image element has this ID
    try {
      const blob = await fetch(gifImage.src).then(r => r.blob());
      await navigator.clipboard.write([
        new ClipboardItem({
          "image/gif": blob // Change the MIME type to "image/gif"
        })
      ]);
      console.log('GIF copied to clipboard!');
    } catch (err) {
      console.error('Error with copying GIF: ', err);
    }
});