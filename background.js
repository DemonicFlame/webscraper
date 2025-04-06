chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "scrapetext",
    title: "Scrape selected text",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "scrapetext") {
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        files: ["content.js"],
      },
      () => {
        if (chrome.runtime.lastError) {
          console.error(
            "Error injecting content script:",
            chrome.runtime.lastError
          );
          return;
        }
        chrome.tabs.sendMessage(
          tab.id,
          { action: "scrapeSelection" },
          (response) => {
            if (chrome.runtime.lastError) {
              console.error(
                "Context menu scrape error: ",
                chrome.runtime.lastError
              );
              return;
            }
            chrome.storage.local.set({
              scrapedText: response ? response.text : "No text found.",
            });
          }
        );
      }
    );
  }
});
