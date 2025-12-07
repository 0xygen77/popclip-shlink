## Shlink PopClip Extension
An unofficial PopClip extension to shorten URLs using your self-hosted Shlink instance.

## Features
- Shortens the selected URL using Shlink REST API v3.
- Copies the shortened URL to the clipboard automatically.
- Built with PopClip's native JavaScript engine (no external dependencies required).

## Installation
### Method 1: Download Source
1. Download this repository as a ZIP file.
2. Unzip the file.
3. Rename the folder to Shlink.popclipext.
4. Double-click the renamed folder to install.

### Method 2: Manual Install
1. Create a folder named Shlink.popclipext.
2. Copy Config.yaml and extension.js into the folder.
3. Double-click the folder to install.

## Configuration
Upon installation, you will be prompted to enter:
- Server URL: The URL of your Shlink instance (e.g., https://s.yourdomain.com).
- API Key: Your Shlink API key (generated via CLI or Shlink web dashboard).

## Requirements
- PopClip 2022.5 or later (requires JavaScript environment).
- A running Shlink instance (API v3 support).

## License
MIT