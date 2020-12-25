const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("orders", {
        orderid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        totalPrice: {
            type: Sequelize.DECIMAL(5,2),
            allowNull: false,
        },
        addedDate: {
            type: Sequelize.DATETIME,
            allowNull: false,
            defaultValue: Sequelize.Now,
        },
        status: {
            type: Sequelize.STRING(255),
            allowNull: false,
            defaultValue: 'PREPARING',
        },
        address: {
            type: Sequelize.STRING(255),
            allowNull: true,
            defaultValue: null,
        }
    }, {
        underscore: true,
        timestamps: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        freezeTableName: true
    });

    return Order;
}