const pageScraper = require("./pageScraper");
const fs = require("fs");

async function scrapeAll(browserInstance) {
  let browser;
  try {
    browser = await browserInstance;
    const data = await pageScraper.scraper(browser);
    saveDataToFile(data, "data.json");
    browser.close();
  } catch (err) {
    console.log("Could not resolve the browser instance => ", err);
  }
}

function saveDataToFile(data, fileName) {
  fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error("Error saving data to file:", err);
    } else {
      console.log("Data saved to file:", fileName);
    }
  });
}

module.exports = (browserInstance) => scrapeAll(browserInstance);
