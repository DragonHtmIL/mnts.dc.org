function openContent(evt, contentId) {
  var ti, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("content");
  for (ti = 0; ti < tabcontent.length; ti++) {
      tabcontent[ti].style.display = "none";
  }
  tablinks = document.getElementsByClassName("categore");
  for (ti = 0; ti < tablinks.length; ti++) {
      tablinks[ti].className = tablinks[ti].className.replace(" active", "");
  }
  document.getElementById(contentId).style.display = "flex";
  evt.currentTarget.className += " active";
}