const listKikina = [
"00002099","00007209","00009546","00010137","00016331","00017552"
];
function loadKikina() {
  for(var i = 0; i < listKikina.length; i++) {
    var location = "../Resources/Stickers/Kikina/";
    var format = ".png";
    const list = document.getElementById("KikinaSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listKikina[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}