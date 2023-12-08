const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  admin.connect();
  console.log("Admin is successfully connected!");
  console.log("Creating topics [pathau-rider-updates]...");
  await admin.createTopics({
    topics: [
      {
        topic: "pathau-rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topics created successfully!");
  admin.disconnect();
}

init();
