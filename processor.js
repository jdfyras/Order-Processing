class OrderProcessor {
    constructor(orderNumber) {
        this.orderNumber = orderNumber
    }
    on() {
        return this.orderNumber
    }
    placeOrder({ lineItems, orderNumber }) {
        this.orderNumber = orderNumber
        this.lineItems = lineItems
    }
}

module.exports = OrderProcessor
