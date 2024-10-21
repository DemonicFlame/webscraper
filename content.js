chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "scrape") {
    const text = document.body.innerText; // Scrape entire text from the body
    sendResponse({ text });
  }
});
