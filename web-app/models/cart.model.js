const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Cart = sequelize.define("cart", {
        KID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    }, {
        underscore: true,
        timestamps: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        freezeTableName: true
    });

    return Customer;
}