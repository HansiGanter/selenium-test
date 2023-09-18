const webdriver = require("selenium-webdriver");
const By = webdriver.By;
const until = webdriver.until;

let driver_fx = new webdriver.Builder().forBrowser("firefox").build();
let driver_chr = new webdriver.Builder().forBrowser("chrome").build();
let driver_saf = new webdriver.Builder().forBrowser("safari").build();

searchTest(driver_fx);
searchTest(driver_chr);
searchTest(driver_saf);

function searchTest(driver) {
    driver.get("http://www.google.com");

    driver.findElement(By.id("L2AGLb")).click();

    driver.findElement(By.name("q")).sendKeys("webdriver");

    driver.sleep(1000).then(() => {
        driver.findElement(By.name("q")).sendKeys(webdriver.Key.ENTER);
    });

    driver.sleep(2000).then(() => {
        driver.getTitle().then((title) => {
            console.log(title);
            if (title === "Google" || title === "webdriver - Google Suche") {
                console.log("Test passed ✅");
            } else {
                console.log("Test failed ❌");
            }
            driver.quit();
        });
    });
}
