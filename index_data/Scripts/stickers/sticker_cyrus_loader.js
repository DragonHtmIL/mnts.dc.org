const listCyrussticker = [
"0000024E","0000024A","00003334","00003534","00004371","00007502","00008742","00009653"
];
function loadCyrus() {
  for(var i = 0; i < listCyrussticker.length; i++) {
    var location = "index_data/Resources/Stickers/Cyrus/";
    var format = ".png";
    const list = document.getElementById("CyrusSlist");
    const asset = document.createElement('img');
    asset.className = "sticker";
    asset.src = location + listCyrussticker[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}