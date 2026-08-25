require("dotenv").config();

const axios = require("axios");

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/dg-bot-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

app.command("/dg-bot-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/dg-bot-help - Shows this menu
/dg-bot-ping - Check bot latency
/dg-bot-catfact - Get a cat fact
/dg-bot-joke - Get a joke
/dg-bot-catpic - Get a cat pic`
  });
});

app.command("/dg-bot-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});

app.command("/dg-bot-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({
      text:
`${response.data.setup}

${response.data.punchline}`
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a joke." });
  }
});

app.command("/dg-bot-catpic", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://cataas.com/api/cats");
    await respond({
      text: "Cat Image:",
      "attachments": [
          {
              "fallback": "Cat Image",
              "image_url": "https://cataas.com/cat?" + new Date().getTime()
          }
      ]
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat image." });
  }
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();
