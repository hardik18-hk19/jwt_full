import mongoose from "mongoose";

const connectDatabase = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Db Connected");
  });
  await mongoose.connect(`${process.env.MONGO_URL}/jwt_aut`);
};

export default connectDatabase;
