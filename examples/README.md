# Node.js Examples

## Requirements
You will need the following software installed on your computer:
* Node.js
* npm

## Installation
NVM is a good way to install and manage Node.js and npm.
```bash
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# installs the latest version of Node.js
nvm install --lts
```

## Installing the dependencies
Run the following command in the root directory of the project:
```bash
npm install
```

## Running the examples
Edit the example file and replace the `YOUR_API_KEY_HERE` placeholder for `x-kiyotaka-key` with your own API key.

Run the following command in the examples directory:
```bash
npx tsx stream_points.ts
```
