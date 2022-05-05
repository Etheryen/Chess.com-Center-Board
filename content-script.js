chrome.storage.sync.get("enabled", ({ enabled }) => {
  if(enabled) {
    let ad = document.querySelector('#board-layout-ad');
    ad.style.display = 'none';
    let body = document.querySelector('body');
    body.style.setProperty('--adWidth', '0rem');
  }
});