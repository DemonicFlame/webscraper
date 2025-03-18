# Document Scraper - Chrome Extension

## Overview

Document Scraper is a Chrome extension that allows users to extract text from any webpage with a single click. The extracted text can then be copied to the clipboard for further use.

## Features

- Scrape all visible text from the current webpage
- Display extracted text in a popup
- Copy the extracted text to the clipboard with one click
- **NEW:** Download the extracted text as a `.txt` file

## Installation

1. Download or clone this repository.
2. Open **Google Chrome** and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle switch in the top-right corner).
4. Click **Load unpacked** and select the folder containing the extension files.
5. The extension will now be added to Chrome.

## How to Use

1. Click on the **Document Scraper** extension icon in the Chrome toolbar.
2. Click the **Scrape Text** button to extract text from the current webpage.
3. The scraped text will appear in the text area.
4. Click the **Copy Text** button to copy the extracted text to the clipboard.
5. **NEW:** Click the **Download as .txt** button to save the text as a file.

## Files Overview

- `manifest.json` - Defines extension metadata and permissions.
- `popup.html` - The UI for the extension popup.
- `popup.css` - Styles for the popup UI.
- `popup.js` - Handles user interactions and messaging with the content script.
- `content.js` - Extracts text from the current webpage.

## Permissions

The extension requires the following permissions:

- `activeTab` - Allows interaction with the currently open tab.
- `scripting` - Injects JavaScript to extract text.
- `clipboardWrite` - Allows copying extracted text to the clipboard.

## Known Issues

- The extension extracts only visible text; hidden or dynamically loaded content may not be captured.
- Some websites may block content script execution, preventing text extraction.
