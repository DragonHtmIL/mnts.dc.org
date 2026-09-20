if ('serviceWorker' in navigator) {
  if (window.location.protocol === 'https:' || window.location.hostname === 'localhost') {
    navigator.serviceWorker.register('/mnts.dc.org/sw.js', { scope: '/mnts.dc.org/' }).then(registration => {
      showToast("Service Worker registered with scope: " + registration.scope);
    }).catch(error => {
      showToast("Service Worker registration failed: " + error);
    });
    document.getElementById("manifestTestLoad")?.setAttribute('href', '/mnts.dc.org/manifest.webmanifest');
  } else {
    showToast("Service workers can be registered only on HTTPS: protocol.");
  }
}