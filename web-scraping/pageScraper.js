const scraperObject = {
  url: "https://www.ikea.com/us/en/offers/limited-time-offers/",
  async scraper(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);

    // // Wait for the required DOM to be rendered
    await page.waitForSelector(".plp-various-content-slot-wrapper");

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
        dataObj["originalPrice"] = "$" + originalPrice;

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
        dataObj["currentPrice"] = "$" + currentPrice;

        // discount %
        const originalNumber = Number(originalPrice.replace(/,/g, ""));
        const currentNumber = Number(currentPrice.replace(/,/g, ""));
        const discountPercent =
          ((originalNumber - currentNumber) / originalNumber) * 100;
        const rounded = Math.round(discountPercent * 100) / 100;
        dataObj["discountPercent"] = rounded + "%";

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
      // scrapedData.push(currentPageData);
      console.log(currentPageData);
      await newPage.close();
    }

    browser.close();
  },
};

module.exports = scraperObject;
