const { kafka } = require("./client");
const group = process.argv[2] || "pathau-rider-group";

async function init() {
  const consumer = kafka.consumer({ groupId: "pathau-rider-group" });
  await consumer.connect();

  await consumer.subscribe({
    topics: ["pathau-rider-updates"],
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(
        `${group} [${topic}]: PART:${partition}: ${message.value.toString()}`
      );
    },
  });
}

init();
