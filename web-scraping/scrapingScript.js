const puppeteer = require("puppeteer");
const fs = require("fs");

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    // Step 1: Navigate to the IKEA website
    await page.goto("https://www.ikea.com/us/en/offers/limited-time-offers/");

    delay(1000);

    // Step 2: Click the "Show more" button until all items are loaded
    // let showMoreButton = await page.$('a.plp-btn[aria-label="Show more"]');
    // let count = 1;
    // while (showMoreButton) {
    //   console.log("count: %d", count);
    //   await page.$eval('a.plp-btn[aria-label="Show more"]', (button) =>
    //     button.click(),
    //   );
    //   await page.waitForSelector(".pip-compact-price-package");
    //   showMoreButton = await page.$('a.plp-btn[aria-label="Show more"]');
    //   count += 1;
    // }

    // console.log('The "Show more" button has disappeared.');

    // Step 3: Interact with the website and extract data
    const products = await page.evaluate(() => {
      const productNodes = document.querySelectorAll(
        ".pip-compact-price-package",
      );
      const products = [];

      for (const node of productNodes) {
        const name = node.querySelector(
          ".pip-header-section__title--small.notranslate",
        ).textContent;
        const price = node.querySelector(".pip-price__integer").textContent;

        products.push({ name, price });
      }

      return products;
    });

    // Step 4: Store or process the extracted data
    console.log(products);
    saveDataToFile(products, "result.json");

    function saveDataToFile(data, fileName) {
      fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) => {
        if (err) {
          console.error("Error saving data to file:", err);
        } else {
          console.log("Data saved to file:", fileName);
        }
      });
    }

    await browser.close();
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();
