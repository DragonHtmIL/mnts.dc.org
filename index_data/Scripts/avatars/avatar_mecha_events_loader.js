const listEventsMavatar = [
"00000010","00000085","00000440","00000469","00000673","00000891","00001172","00001249","00001268","00001588",
"00001754","00001946","00002023_0","00002445","00003127","00003142","00003381","00003533","00004393","00004541",
"00004743","00005134","00005461","00006144","00006480","00007114","00007597","00007799","00008246","00008941_0",
"00008983","00009275","00009495","00009708","00010010","00010419","00010597","00011437","00011557","00011882",
"00011949","00012505","00013061","00013765","00014043","00014091","00014242","00014488","00014657","00015197",
"00015548","00016166","00016237","00016326","00016826","00017020","00017167","00017925","00017984","00018098"
];
function loadEventsM() {
  for(var i = 0; i < listEventsMavatar.length; i++) {
    var location = "index_data/Resources/Avatars/EventsM/";
    var format = ".png";
    const list = document.getElementById("EventsMSlist");
    const asset = document.createElement('img');
    asset.className = "avatar";
    asset.src = location + listEventsMavatar[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}