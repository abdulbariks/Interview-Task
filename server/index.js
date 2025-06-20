const app = require("./app");
const connectDB = require("./config/db.config");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 5001;

// DB Connect
connectDB();

// Server Start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
