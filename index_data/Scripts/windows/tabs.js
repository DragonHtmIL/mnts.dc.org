function openContentSt(evt, contentId) {
  var ti, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("cst");
  for (ti = 0; ti < tabcontent.length; ti++) {
      tabcontent[ti].style.display = "none";
  }
  tablinks = document.getElementsByClassName("categorest");
  for (ti = 0; ti < tablinks.length; ti++) {
      tablinks[ti].className = tablinks[ti].className.replace(" active", "");
  }
  document.getElementById(contentId).style.display = "flex";
  evt.currentTarget.className += " active";
};
function openContentAv(evt, contentId) {
  var ti, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("cav");
  for (ti = 0; ti < tabcontent.length; ti++) {
      tabcontent[ti].style.display = "none";
  }
  tablinks = document.getElementsByClassName("categoreav");
  for (ti = 0; ti < tablinks.length; ti++) {
      tablinks[ti].className = tablinks[ti].className.replace(" active", "");
  }
  document.getElementById(contentId).style.display = "flex";
  evt.currentTarget.className += " active";
};
function openContentWp(evt, contentId) {
  var ti, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("cwp");
  for (ti = 0; ti < tabcontent.length; ti++) {
      tabcontent[ti].style.display = "none";
  }
  tablinks = document.getElementsByClassName("categorewp");
  for (ti = 0; ti < tablinks.length; ti++) {
      tablinks[ti].className = tablinks[ti].className.replace(" active", "");
  }
  document.getElementById(contentId).style.display = "flex";
  evt.currentTarget.className += " active";
};