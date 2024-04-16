const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    serverPort: process.env.PORT,
    dbPort: Number(process.env.DB_PORT),
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbName: process.env.DB_NAME,
    dbPassword: process.env.DB_PASSWORD
}