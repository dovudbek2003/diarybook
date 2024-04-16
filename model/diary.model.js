module.exports = (sequelize, Sequelize) => {
    const diary = sequelize.define('diaries', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        text: {
            type: Sequelize.STRING,
            allowNull: false
        },
        imageUrl: {
            type: Sequelize.STRING,
            allowNull: true
        }
    }, {
        timestamps: true,
    })

    return diary
}