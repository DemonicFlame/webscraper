chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  try {
    let text = "";

    if (request.action === "scrapeSelection") {
      text = window.getSelection().toString() || "No text found.";
    } else if (request.action === "scrape") {
      text = document.body.innerText || "No text found.";
    }
    sendResponse({ text });
  } catch (error) {
    console.error("Scraping error:", error);
    sendResponse({ text: "Error occurred while scraping." });
  }
});
