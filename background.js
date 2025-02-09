chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "addImageToDataset",
      title: "Ajouter l'image au dataset",
      contexts: ["image"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "addImageToDataset") {
      chrome.storage.local.get(['images'], (result) => {
        const images = result.images || [];
        images.push({ url: info.srcUrl });
        chrome.storage.local.set({ images }, () => {
          chrome.action.setBadgeText({ text: images.length.toString() });
        });
      });
    }
  });