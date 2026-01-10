const listEmoji = [
"0000024E","00000476","00000909","00001409","00001547","00003196","00003246","00004164","00004480","00004786",
"00004846","00004852","00005367","00005396","00005851","00007056","00007194","00007233","00007334","00007483",
"00007568","00008405","00008520","00009049","00009126","00009411","00009602","00009918","00010428","00010459",
"00010513_0","00010662","00010846","00010950","00011191","00011868","00012422","00012860","00013383","00013476",
"00013852","00013968","00013988","00014686","00015018","00017150","00017456","00017637","00018133","00018395",
"00018552"
];
function loadEmoji() {
  for(var i = 0; i < listEmoji.length; i++) {
    var location = "../Resources/Stickers/Emoji/";
    var format = ".png";
    const list = document.getElementById("EmojiSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listEmoji[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}