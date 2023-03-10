import mongoose from "mongoose";
import config from "config";
import logger from "../utils/logger";

mongoose.set("strictQuery", true);

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    logger.info("Connected to MongoDB");
  } catch (err) {
    logger.error("Could not connect to db");
    process.exit(1);
  }
}

export default connect;
