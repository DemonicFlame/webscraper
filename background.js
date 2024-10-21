chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "scrape") {
    chrome.scripting
      .executeScript({
        target: { tabId: sender.tab.id },
        function: scrapeDocumentText,
      })
      .then((results) => {
        sendResponse({ text: results[0].result });
      })
      .catch((error) => console.error(error));
  }
  return true; // Keep the connection open for asynchronous responses
});

function scrapeDocumentText() {
  const bodyText = document.body.innerText; // Scrape the entire body text
  return bodyText;
}
