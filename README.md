# Web Scraper Chrome Extension

## Overview

Document Scraper is a lightweight Chrome extension that allows users to extract text content from the currently active webpage and copy it to the clipboard.

## Features

- Scrapes the text content of any webpage.
- Displays extracted text in a popup.
- Allows users to copy the scraped text with a single click.

## Installation

1. Download or clone this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the project folder.
5. The extension will now be available in your browser.

## Usage

1. Click on the extension icon to open the popup.
2. Click **Scrape Text** to extract text from the active webpage.
3. The extracted text will be displayed in the text area.
4. Click **Copy Text** to copy the extracted text to your clipboard.

## Permissions

- **activeTab**: Allows access to the currently active tab.
- **scripting**: Injects scripts into webpages to extract text.
- **clipboardWrite**: Enables copying extracted text to the clipboard.
