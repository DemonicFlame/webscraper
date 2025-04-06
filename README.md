# WebScraper

## Overview

WebScraper is a Chrome extension that allows users to extract text from any webpage with a single click. The extracted text can then be copied to the clipboard or downloaded as txt file.

## Features

- **One-click scraping** of all visible text
- **Copy to clipboard** functionality
- **Download as .txt file** option
- **Right-click context menu** for selected text scraping

## Installation

1. Download or clone this repository.
2. Open **Google Chrome** and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle switch in the top-right corner).
4. Click **Load unpacked** and select the folder containing the extension files.
5. **Pin the extension** to your toolbar for easy access

## How to Use

### Basic Usage:

1. Click the extension icon in your toolbar
2. Click **Scrape Text** to extract all page text
3. Use either:

- **Copy Text** - Copies to clipboard (confirmation appears for 2 seconds)
- **Download as .txt** - Saves as text file

### Context Menu:

1. Select text on any webpage
2. Right-click and choose **Scrape selected text**
3. Click the extension icon to view captured text

## Permissions

| Permission       | Purpose                    |
| ---------------- | -------------------------- |
| `activeTab`      | Access current tab content |
| `scripting`      | Inject content scripts     |
| `clipboardWrite` | Enable copy functionality  |
| `contextMenus`   | Add right-click options    |
| `storage`        | Temporary data storage     |

## Known Issues

- The extension extracts only visible text; hidden or dynamically loaded content may not be captured.
- Some websites may block content script execution, preventing text extraction.
