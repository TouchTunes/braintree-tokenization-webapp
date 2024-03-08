# Tokenize Credit Card Web App

This is a web application for tokenizing credit card information using Braintree SDK.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Configuration](#configuration)

## Introduction

This web application allows users to tokenize credit card information using the Braintree SDK. It provides a simple interface for users to input their credit card details and tokenize them securely. Upon tokenization, the nonce as well as the collected device data are displayed.


## Installation

To run the web app locally, follow these steps:

1. Clone this repository:

```bash
git clone https://github.com/yourusername/braintree-tokenization-webapp.git
```

2. Navigate to the project directory:

```bash
cd braintree-tokenization-webapp
```

### Run locally

1.1 Install dependencies:

```bash
npm install
```

1.2 Start the webapp:

```bash
npx webpack --mode production
npm start
```

Then, open your web browser and navigate to http://localhost:3000.

### Run with docker

2.1. Create docker container by running:

```bash
docker-compose up
```

Then, open your web browser and navigate to http://localhost:3000.


## Configuration

You can configure the client token for Braintree SDK by setting the CLIENT_TOKEN environment variable or in the docker-compose file.
Value for CLIENT_TOKEN can be found in the Braintree Gateway or the Braintree Sandbox for test environments.
In Braintree, nagivat to:
Settings (Gear Icon in the top right) -> API -> Tokenization Keys



![tokenization_img](https://github.com/TouchTunes/braintree-tokenization-webapp/assets/124704325/986976bb-fb57-4cff-be96-a7f3394eadaf)

