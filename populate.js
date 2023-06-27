require("dotenv").config();
const connectDb = require("./db/connect");
const Jobs = require("./models/Job");
const mockData = require("./MOCK_DATA.json");

const start = () => {
  try {
    connectDb(process.env.MONGO_URI);
    Jobs.create(mockData);
  } catch (err) {
    console.log(err);
  }
};

start();
