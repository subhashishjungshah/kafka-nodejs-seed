const { kafka } = require("./client");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  const producer = kafka.producer();

  console.log("Connecting Producer...");
  await producer.connect();
  console.log("Producer connected successfully!");

  rl.setPrompt(">");
  rl.prompt();

  rl.on("line", async function (line) {
    const [name, location] = line.split(" ");
    await producer.send({
      topic: "pathau-rider-updates",
      messages: [
        {
          partition: location.toLowerCase() === "south" ? 0 : 1,
          key: "location-update",
          value: JSON.stringify({ name, location }),
        },
      ],
    });
  }).on("close", async () => {
    await producer.disconnect();
  });
}

init();
