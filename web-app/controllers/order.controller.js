const db = require('../models');
const Order = db.order;
const Op = db.Sequelize.Op;
const sequelize = db.sequelize;

// Retrieve all orders information
exports.findAll = (req, res) => {
    Order.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving orders information"
            });
        });
};

// Retrieve an order information with an id
exports.findOne = (req, res) => {
    const id = req.query.id;
    
    var condition = {
            orderid: {
                [Op.eq]: id
            }
        }

    Order.findAll({ where : condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving order with id=" + id
            });
        });
};

// Update a order information with an id
exports.updateStatus = (req, res) => {
    const id = req.body.orderid;
  
    Order.update(req.body, {
        where: { orderid: id }
    })
      .then(num => {
          if (num == 1) {
              res.send({
                  message: "Order status was updated successfully."
              });
          } else {
              res.send({
                  message: `Fail to update order status with id=${id}. Maybe order was not found or req.body is empty!`
              });
          }
      })
      .catch(err => {
          res.status(500).send({
              message: "Error updating order status with id=" + id
          });
      });
};

// Delete a Order information with an id
exports.deleteOne = (req, res) => {
    const id = req.body.orderid;
  
    Order.destroy({
        where: { orderid: id }
    })
      .then(num => {
          if (num == 1) {
              res.send({
                  message: "Order was deleted successfully!"
               });
          } else {
              res.send({
                  message: `Cannot delete order with id=${id}. Maybe order was not found!`
              });
          }
      })
      .catch(err => {
          res.status(500).send({
              message: "Could not delete Order with id=" + id
          });
      });
};

exports.findAllTotalPrice = (req, res) => {
    const year = req.query.year;
    const month = req.query.month;
    const day = req.query.day;

    if(day > 0 && day <= 31) {
        Order.findAll({
            attributes: ['totalPrice', 'addedDate'],
            where: {
                [Op.and]: [
                    sequelize.where(sequelize.fn('year', sequelize.col('addedDate')), year),
                    sequelize.where(sequelize.fn('month', sequelize.col('addedDate')), month),
                    sequelize.where(sequelize.fn('day', sequelize.col('addedDate')), day),
                    { status: "DONE" }
                ]
            }
        })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving Order items information"
                });
            });
        return;
    }

    Order.findAll({
        attributes: ['totalPrice', 'addedDate'],
        where: {
            [Op.and]: [
                sequelize.where(sequelize.fn('year', sequelize.col('addedDate')), year),
                sequelize.where(sequelize.fn('month', sequelize.col('addedDate')), month),
                { status: "DONE" }
            ]
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Order items information"
            });
        });
};