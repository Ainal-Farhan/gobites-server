module.exports = app => {
    const order = require('../controllers/order.controller.js');

    var router = require("express").Router();

    router.get("/", order.findAll);

    router.get("/totalPrice", order.findAllTotalPrice);

    router.get("/order", order.findOne);

    router.put("/update", order.updateStatus);

    router.delete("/", order.deleteOne);

    app.use("/api/orders", router);
}