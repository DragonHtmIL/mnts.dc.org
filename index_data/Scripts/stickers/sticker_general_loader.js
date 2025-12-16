const listGeneral = [
"0","1","2","3","4","5","00000343","00002538","00002942","00005422",
"00006854","00007510","00007783","00012041","00016067","00017863"
];
function loadGeneral() {
  for(var i = 0; i < listGeneral.length; i++) {
    var location = "index_data/Resources/Stickers/General/";
    var format = ".png";
    const list = document.getElementById("GeneralSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listGeneral[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}