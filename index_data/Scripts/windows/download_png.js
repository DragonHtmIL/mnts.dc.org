document.getElementById("downButton").addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = document.getElementById("expandedImg").src;
  link.download = document.getElementById("vartime").value + ".png";
  link.style.display = "none";
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});