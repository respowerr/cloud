const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  process.env.db_name, // Database name
  process.env.db_user, // User
  process.env.db_pass, // Password
  {
    host: process.env.db_host, // Host
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
