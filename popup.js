const scrapeButton = document.getElementById("scrapeButton");
const copyButton = document.getElementById("copyButton");
const resultArea = document.getElementById("resultArea");
const downloadButton = document.getElementById("downloadButton");

scrapeButton.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0) return;
    chrome.scripting.executeScript(
      { target: { tabId: tabs[0].id }, files: ["content.js"] },
      () => {
        if (chrome.runtime.lastError) {
          console.error(
            "Error injecting content script:",
            chrome.runtime.lastError
          );
          resultArea.value = "Failed to load content script.";
          return;
        }

        // Send message to content.js only after ensuring it's injected
        chrome.tabs.sendMessage(
          tabs[0].id,
          { action: "scrape" },
          (response) => {
            if (chrome.runtime.lastError) {
              console.error("Message sending error:", chrome.runtime.lastError);
              resultArea.value = "Failed to scrape text.";
              return;
            }
            resultArea.value = response ? response.text : "No text found.";
          }
        );
      }
    );
  });
});

// Copy text to clipboard
copyButton.addEventListener("click", () => {
  if (resultArea.value) {
    navigator.clipboard.writeText(resultArea.value).then(() => {
      copyButton.textContent = "Copied!";
      setTimeout(() => (copyButton.textContent = "Copy Text"), 2000);
    });
  }
});

// Download text as a file
downloadButton.addEventListener("click", () => {
  if (resultArea.value) {
    const blob = new Blob([resultArea.value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "scraped_text.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
});

// Load scraped text when popup opens
chrome.storage.local.get("scrapedText", (data) => {
  resultArea.value = data.scrapedText || "";
  chrome.storage.local.clear();
});
