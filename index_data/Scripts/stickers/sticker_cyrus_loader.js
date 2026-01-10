const listCyrus = [
"0000024E","0000024A","00003334","00003534","00004371","00007502","00008742","00009653"
];
function loadCyrus() {
  for(var i = 0; i < listCyrus.length; i++) {
    var location = "../Resources/Stickers/Cyrus/";
    var format = ".png";
    const list = document.getElementById("CyrusSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listCyrus[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}