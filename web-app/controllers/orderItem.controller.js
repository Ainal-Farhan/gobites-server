const db = require('../models');
const OrderItem = db.orderItem;
const Op = db.Sequelize.Op;

// Retrieve all order items information
exports.findAll = (req, res) => {
    OrderItem.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Order items information"
            });
        });
};