const listSerena = [
"00000295","00001171","00001922","00007490","00007622","00007701","00009944","00016404"
];
function loadSerena() {
  for(var i = 0; i < listSerena.length; i++) {
    var location = "index_data/Resources/Stickers/Serena/";
    var format = ".png";
    const list = document.getElementById("SerenaSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listSerena[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}