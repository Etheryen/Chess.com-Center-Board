let enabled = true;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ enabled });
  console.log('Extention enabled %csuccessfully.', 'color: lime');
});