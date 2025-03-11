chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "scrape") {
    // Scrape entire text from the body element
    const text = document.body.innerText
      ? document.body.innerText
      : "No text found.";
    sendResponse({ text });
  }
});
