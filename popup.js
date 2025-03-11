const scrapeButton = document.getElementById("scrapeButton");
const copyButton = document.getElementById("copyButton");
const resultArea = document.getElementById("resultArea");

scrapeButton.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0) return; // No tabs found

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
