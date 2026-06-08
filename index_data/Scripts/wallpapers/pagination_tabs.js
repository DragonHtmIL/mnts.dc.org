function openPings(evt, pingName) {
  var i, paginationcontainer;
  paginationcontainer = document.getElementsByClassName("paginationcontainer");
  for (i = 0; i < paginationcontainer.length; i++) {
    paginationcontainer[i].style.display = "none";
  }
  document.getElementById(pingName).style.display = "inline-flex";
  evt.currentTarget.className += " flexed";
};