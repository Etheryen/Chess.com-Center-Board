let enabled = true;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ enabled });
  if(enabled) console.log('Extention enabled %csuccessfully.', 'color: lime');
});