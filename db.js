const { Sequelize } = require('sequelize')
const db_host = process.env.db_host;
const db_name = process.env.db_name;
const db_pass = process.env.db_pass;
const db_user = process.env.db_user;
// database
const sequelize = new Sequelize(
  db_name, // Database name
  db_user, // User
  db_pass, // Password
  {
    host: db_host, // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
