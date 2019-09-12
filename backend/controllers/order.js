const Order = require('../model/order');

exports.createOrder = (req, res, next) =>{
    const order = new Order({
        title: req.body.title,
        no_of_order: req.body.no_of_order,
        amount: req.body.amount,
        location: req.body.location,
        phone_number: req.body.phone_number
    });
    //using model to the save the work
    order.save().then(
        () =>{
            return res.status(201).json({
                message: 'Food Order Created Successfully'
            })
        }
    ).catch(
        (error) =>{
            return res.status(400).json({
                error
            });
        }
    );
}

