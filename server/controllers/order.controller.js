const Orders = require("../models/order.model");
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');



// call back functions separated from routes
// Read All
module.exports.getAllOrders = (req, res) => {
    Orders.find()
        .then(allOrders => res.json({ order: allOrders }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// Find one
module.exports.findoneSingleOrder = (req, res) => {
    const id = req.params.id
    console.log(id)
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        console.log(`Invalid id parameter: ${req.params.id}`);
        return res.status(400).json({ message: 'Invalid id parameter' });
    }

    Orders.findOne({ _id: req.params.id })
        .then(oneSingleOrder => {
            if (!oneSingleOrder) {
                console.log(`Order with id ${req.params.id} not found`);
                return res.status(404).json({ message: 'Order not found' });
            }
            console.log(`Found order with id ${req.params.id}:`, oneSingleOrder);
            res.json({ order: oneSingleOrder });
        })
        .catch(err => {
            console.log(`Error finding order with id ${req.params.id}:`, err);
            res.status(500).json({ message: 'Something went wrong', error: err });
        });
}

//  Create
module.exports.createNewOrder = async (req, res) => {
    console.log(req.body)
    try {
        const newOrder = await new Orders(req.body).save()
        res.status(201).json({ message: "order created", orderId: newOrder._id })
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' })
    }
}

// Update
module.exports.updateExistingOrder = async (req, res, next) => {
    try {
        console.log(req.body);
        const { status } = req.body;
        const { id } = req.params
        console.log(id)
        const updatedOrder = await Orders.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        )
        res.status(200).json(updatedOrder)
    } catch (err) {
        next(err)
    }
}

// Delete
module.exports.deleteAnExistingOrder = (req, res) => {
    Orders.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// Search
module.exports.searchOrders = async (req, res) => {
    const { searchTerm } = req.params;
    const regex = new RegExp(searchTerm, 'i');
    try {
        const orders = await Orders.find({
            $or: [
                { 'billing.email': regex },
                { 'billing.firstName': regex },
                { 'billing.lastName': regex },
                { 'billing.company': regex },
                { 'billing.address': regex },
                { 'billing.phone': regex },
                { 'shipping.firstName': regex },
                { 'shipping.lastName': regex },
                { 'shipping.company': regex },
                { 'shipping.address': regex },
                { 'status': regex },
                { 'products': regex },
                { 'deliveryMethod': regex }
            ]
        })

        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};