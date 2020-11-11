---
id: install_curl
title: Install cURL (MacOS/Linux)
---

## What is cURL?
>cURL is a command-line tool that lets you transfer data to/from a server using various protocols. In this case, the curl command will establish a communication to POST or GET data to/from Ubidots Server over HTTP and HTTPS.

#### Example
To get the current price of Bitcoin using the Gemini Public API
```bash
$ curl "https://api.gemini.com/v2/ticker/btcusd"
```

The response looks something like
```json
{
  "symbol":"BTCUSD",
  "open":"15380.14",
  "high":"16000",
  "low":"15293.42",
  "close":"15827.35",
  "changes":["15836.14","15738.91","15830.23","15839.34",
    "15894.87","15790.08","15700.01","15666.36","15562.03"],
  "bid":"15827.35",
  "ask":"15827.36"
}
```
---
Below you will find the step-by-step to installing cURL on MacOS or and Linux (Easiest).

#### MacOSX Installation
1. Run the command below in the terminal:
```bash
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" < /dev/null 2> /dev/null
```
2. If a password is required after running the command, please enter your Mac's user password to continue. Then, wait until the installation finish.

3. Run the command below in the terminal:
```bash
$ brew install curl
```
Done!

#### Linux installation
1. Run the command below in the terminal:
```bash
$ sudo apt-get install curl
```
2. If a password is required after ran the command, please enter your computers' user password to continue. Then, wait until the installation finishes.

Done!
