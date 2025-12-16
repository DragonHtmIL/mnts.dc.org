document.getElementById("downButtonGif").addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = document.getElementById("expandedImgGif").src;
  link.download = document.getElementById("vartime").value + ".gif";
  link.style.display = "none";
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});