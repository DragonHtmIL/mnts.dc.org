document.getElementById("downButtonVid").addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = document.getElementById("expandedImgVid").src;
  link.download = document.getElementById("vartime").value + ".mp4";
  link.style.display = "none";
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});