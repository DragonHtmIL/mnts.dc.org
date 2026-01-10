const listRED = [
"0000024A","0000024E","00015950"
];
function loadRED() {
  for(var i = 0; i < listRED.length; i++) {
    var location = "index_data/Resources/Stickers/RED/";
    var format = ".png";
    const list = document.getElementById("REDSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listRED[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}