const Sequelize = require('sequelize')

const { dbName, dbUser, dbPassword, dbHost, dbPort } = require('../config/dotenv.config')
const diary = require('./diary.model')
const comment = require('./comment.model')

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    port: dbPort,
    dialect: 'postgres',
    // logging: false // sequelize console larini o'chirib qo'yish
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.diary = diary(sequelize, Sequelize)
db.comment = comment(sequelize, Sequelize)

db.diary.hasMany(db.comment, {
    as: 'comment',
    onDelete: 'CASCADE'
})
db.comment.belongsTo(db.diary, {
    foreignKey: 'diaryId',
    as: 'diary'
})

module.exports = db