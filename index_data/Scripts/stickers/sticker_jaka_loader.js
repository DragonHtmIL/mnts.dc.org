const listJaka = [
"00006627","00009403"
];
function loadJaka() {
  for(var i = 0; i < listJaka.length; i++) {
    var location = "index_data/Resources/Stickers/Jaka/";
    var format = ".png";
    const list = document.getElementById("JakaSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listJaka[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}