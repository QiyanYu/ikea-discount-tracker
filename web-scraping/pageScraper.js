const scraperObject = {
  url: "https://www.ikea.com/us/en/offers/limited-time-offers/",
  async scraper(browser) {
    let data = [];
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);

    // // Wait for the required DOM to be rendered
    // await page.waitForSelector(".plp-various-content-slot-wrapper");

    // Click the "Show more" button until all items are loaded
    let showMoreButton = await page.$('a.plp-btn[aria-label="Show more"]');
    let count = 1;
    while (showMoreButton) {
      console.log("count: %d", count);
      await page.$eval('a.plp-btn[aria-label="Show more"]', (button) =>
        button.click(),
      );
      await page.waitForSelector(".pip-compact-price-package");
      showMoreButton = await page.$('a.plp-btn[aria-label="Show more"]');
      count += 1;
    }

    console.log('The "Show more" button has disappeared.');

    // Get the link to all the required books
    let urls = await page.$$eval(
      "main .plp-product-list .plp-fragment-wrapper > .plp-product-list__fragment",
      (links) => {
        // Extract the links from the data
        links = links.map(
          (el) => el.querySelector(".pip-product-compact > a").href,
        );
        return links;
      },
    );

    // Loop through each of those links, open a new page instance and get the relevant data from them
    let pagePromise = (link, newPage) =>
      new Promise(async (resolve, reject) => {
        let dataObj = {};

        await newPage.goto(link);

        // id
        dataObj["id"] = await newPage.$eval(
          "div.pip-product__subgrid.product-pip.js-product-pip",
          (div) => div.getAttribute("data-product-id"),
        );

        // category

        dataObj["category"] = await newPage.$eval(
          "#content > div > div.pip-page-container__inner > div > div:nth-child(1) > div > nav > ol > li:nth-child(2) > a > span",
          (text) => text.textContent,
        );

        // name
        dataObj["name"] = await newPage.$eval(
          ".pip-header-section__title--big.notranslate",
          (text) => text.textContent,
        );

        // details
        const description = await newPage.$eval(
          ".pip-header-section__description-text",
          (text) => text.textContent,
        );
        const measurement = await newPage.$eval(
          ".pip-list-view-item__addon",
          (text) => text.textContent,
        );
        dataObj["details"] = description + measurement;

        // original price
        const originalInteger = await newPage.$eval(
          ".pip-temp-price--strikeout .pip-temp-price__integer",
          (text) => text.textContent,
        );
        const originalDecimal = await newPage.$eval(
          ".pip-temp-price--strikeout .pip-temp-price__decimal",
          (text) => text.innerText,
        );
        const originalPrice = originalInteger + originalDecimal;
        dataObj["originalPrice"] = originalPrice;

        // current price
        const currentInteger = await newPage.$eval(
          ".pip-temp-price-module__current-price .pip-temp-price__integer",
          (text) => text.textContent,
        );
        const currentDecimal = await newPage.$eval(
          ".pip-temp-price-module__current-price .pip-temp-price__decimal",
          (text) => text.textContent,
        );
        const currentPrice = currentInteger + currentDecimal;
        dataObj["currentPrice"] = currentPrice;

        // discount %
        const originalNumber = Number(originalPrice);
        const currentNumber = Number(currentPrice);
        const discountPercent =
          ((originalNumber - currentNumber) / originalNumber) * 100;
        const rounded = Math.round(discountPercent);
        dataObj["discountPercent"] = rounded;

        // image
        dataObj["image"] = await newPage.$eval("img.pip-image", (images) =>
          images.getAttribute("src"),
        );

        // link
        dataObj["link"] = link;

        resolve(dataObj);
      });

    // waited for the Promise using a for-in loop
    for (link in urls) {
      let newPage = await browser.newPage();
      let currentPageData = await pagePromise(urls[link], newPage);
      data.push(currentPageData);
      console.log(currentPageData);
      await newPage.close();
    }
    return data;
  },
};

module.exports = scraperObject;
