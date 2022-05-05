let button = document.getElementById("button");

function setButton() {
  chrome.storage.sync.get("enabled", ({ enabled }) => {
    if(enabled) {
      button.innerText = 'Enabled'
      button.className = 'enabled'
      return
    }
    button.innerText = 'Disabled'
    button.className = 'disabled'
  });
}

button.addEventListener("click", () => {
  changeStatus();
});

chrome.storage.onChanged.addListener(() => {
  setButton();
});

function changeStatus() {
  chrome.storage.sync.get("enabled", ({ enabled }) => {
    enabled = !enabled;
    chrome.storage.sync.set({ enabled });
  });
}

setButton();