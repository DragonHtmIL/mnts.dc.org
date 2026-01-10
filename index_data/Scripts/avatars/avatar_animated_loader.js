const listAnimated = [
"a","b","c","d","e","f","g","h","i","j",
"k","l","m","n","o","p","q","r","s"
];
function loadAnimated() {
  for(var i = 0; i < listAnimated.length; i++) {
    var location = "../Resources/Avatars/Animated/";
    var format = ".gif";
    const list = document.getElementById("AnimatedSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listAnimated[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}