const copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click', async () => {
  const image = document.getElementById("expandedImg");
    try {
      const blob = await fetch(image.src).then(r => r.blob());
      await navigator.clipboard.write([
        new ClipboardItem({
          "image/png": blob
        })
      ]);
    } catch (err) {
      console.log('Error with coping.');
    }
});