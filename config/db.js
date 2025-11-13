export const connectDB = () => {
  const dbUrl = "mongodb://admin:supersecret123@localhost:27017/leakycoffee";
  console.log(`Connecting to DB at ${dbUrl}`);
};