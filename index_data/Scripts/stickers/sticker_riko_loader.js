const listRiko = [
"0","1","2","3","4","5","6","7","8","9",
"10","11","12","13","14","15","16","17","18","00000195",
"00000337","00000388","00001541","00002580","00003152","00004207","00006318","00006394","00006583","00007739_0",
"00008732","00008763","00009196","00013408","00014116","00016157","00016739","00018274","00018411"
];
function loadRiko() {
  for(var i = 0; i < listRiko.length; i++) {
    var location = "../Resources/Stickers/Riko/";
    var format = ".png";
    const list = document.getElementById("RikoSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listRiko[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}