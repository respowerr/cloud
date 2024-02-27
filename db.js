const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  '', // Database name
  '', // User
  '', // Password
  {
    host: 'postgres://postgres_gpdx_user:hXe2jmcterwa2UKDpzuRP3mA3NTb0wSD@dpg-cneqqk0l5elc73dcqmug-a/postgres_gpdx', // Host
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
