const { chromium } = require("playwright");
const faker = require("faker");
const { generateRoomCode } = require("./helpers");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to jackbox
  await page.goto("http://jackbox.tv");

  // Enter fake name
  await page.fill(
    "id=username",
    `${faker.name.firstName()}${faker.name.lastName()}`
  );

  // Find a valid room (brute force)
  let found = false;
  console.log("Searching for room...");
  while (!found) {
    const roomCode = generateRoomCode();
    await page.fill("id=roomcode", roomCode);
    const statusSpan = await page.locator("span.status");
    await statusSpan.waitFor();
    const status = await statusSpan.textContent();
    if (status !== "Room not found") {
      found = true;
      console.log(`Room found: ${roomCode}`);
    }
  }

  // Enter room
  await page.click("id=button-join");
})();
