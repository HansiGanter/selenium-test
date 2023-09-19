const webdriver = require("selenium-webdriver");
const By = webdriver.By;
const until = webdriver.until;

// username: Username can be found at automation dashboard
const USERNAME = "hansi.ganter";

// AccessKey: AccessKey can be generated from automation dashboard or profile section
const KEY = "GbS3i5SkWdgVIrvP0qzlJ55nuYSm14UjnycjG4zAUCE89fWXOO";

// gridUrl: gridUrl can be found at automation dashboard
const GRID_HOST = "hub.lambdatest.com/wd/hub";

function searchTextOnGoogle() {
    // Setup Input capabilities
    const capabilities = {
        platform: "windows 10",
        browserName: "chrome",
        version: "67.0",
        resolution: "1280x800",
        network: true,
        visual: true,
        console: true,
        video: true,
        name: "Test 1", // name of the test
        build: "NodeJS build", // name of the build
    };

    // URL: https://{username}:{accessToken}@hub.lambdatest.com/wd/hub
    const gridUrl = `https://${USERNAME}:${KEY}@${GRID_HOST}`;

    // setup and build selenium driver object
    const driver = new webdriver.Builder()
        .usingServer(gridUrl)
        .withCapabilities(capabilities)
        .build();

    // navigate to a URL, search for a text and get title of page
    driver.get("https://www.google.com/ncr").then(function () {
        driver
            .findElement(webdriver.By.name("q"))
            .sendKeys("LambdaTest\n")
            .then(function () {
                driver.getTitle().then((title) => {
                    setTimeout(() => {
                        console.log(title);
                        driver.quit();
                    }, 5000);
                });
            });
    });
}

searchTextOnGoogle();
