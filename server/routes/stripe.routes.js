const StripeController = require('../controllers/stripe.controller');


module.exports = app => {
    app.get("/payment", StripeController.payment);
    app.get("/config", StripeController.config);
    app.post("/create-payment-intent", StripeController.createPaymentIntent);
}