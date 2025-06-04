// test-db.js

const sequelize = require('./config/db');

sequelize.authenticate()
  .then(() => {
    console.log("✅ Connection to MySQL successful!");
  })
  .catch((err) => {
    console.error("❌ Unable to connect to the database:", err.message);
  })
  .finally(() => {
    sequelize.close(); // closes the connection after testing
  });
