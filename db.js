const db_host = require('bin/www');
const db_name = require('bin/www');
const db_user = require('bin/www');
const db_pass = require('bin/www');

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
