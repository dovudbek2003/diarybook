const { DataTypes } = require("sequelize")

module.exports = (sequelize, Sequelize) => {
    const comment = sequelize.define('comments', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        comment: {
            type: Sequelize.STRING,
            allowNull: true
        }
    }, {
        timestamps: true
    })

    return comment
}