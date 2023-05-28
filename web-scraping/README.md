# IKEA Discount Tracker - Web Scraping

This directory contains the web scraping component of the IKEA Discount Tracker project. The web scraping functionality is responsible for retrieving and processing discount information from the IKEA website.

This project was inspired by the following tutorial: [How to Scrape a Website using Node.js and Puppeteer](https://www.digitalocean.com/community/tutorials/how-to-scrape-a-website-using-node-js-and-puppeteer#step-3-mdash-scraping-data-from-a-single-page). The tutorial provides valuable insights and guidance on web scraping techniques using Node.js and Puppeteer.

## Table of Contents

- [IKEA Discount Tracker - Web Scraping](#ikea-discount-tracker---web-scraping)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Usage](#usage)

## Introduction

The IKEA Discount Tracker is a project aimed at tracking and monitoring discounts on IKEA products. The web scraping component is responsible for extracting discount information from the IKEA website, such as product names, original prices, sale prices, and images.

## Installation

To set up the web scraping component, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/QiyanYu/ikea-discount-tracker.git
   ```
2. Change into the "web-scraping" directory:
   ```bash
   cd ikea-discount-tracker/web-scraping
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To use the web scraping component, follow these steps:

1. Ensure you have completed the installation steps mentioned above.

2. Modify the necessary configuration files to specify the desired scraping parameters (see [Configuration](#configuration)).

3. Run the web scraping script:

   ```bash
    npm run start
   ```

   This command will start the web scraping process and retrieve the discount information from the IKEA website.

4. The scraped data will be stored in a specified format or location according to your configuration.
