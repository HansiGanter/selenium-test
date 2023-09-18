const webdriver = require("selenium-webdriver");
const By = webdriver.By;
const until = webdriver.until;

const driver = new webdriver.Builder().forBrowser("firefox").build();

driver.get("http://www.google.com");

driver.findElement(By.id("L2AGLb")).click();

driver.findElement(By.name("q")).sendKeys("webdriver");

driver.sleep(1000).then(() => {
  driver.findElement(By.name("q")).sendKeys(webdriver.Key.ENTER);
});

driver.sleep(2000).then(() => {
  driver.getTitle().then((title) => {
    console.log(title);
    if (title === "Google") {
      console.log("Test passed ✅");
    } else {
      console.log("Test failed ❌");
    }
    driver.quit();
  });
});

