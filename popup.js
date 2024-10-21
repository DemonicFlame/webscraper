const scrapeButton = document.getElementById("scrapeButton");
const resultArea = document.getElementById("resultArea");

scrapeButton.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "scrape" }, (response) => {
      resultArea.value = response.text;
    });
  });
});
