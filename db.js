const { Sequelize } = require('sequelize')

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
