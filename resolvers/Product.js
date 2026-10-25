module.exports = {
    // discount is a fraction between 0 and 1 (e.g. 0.15 = 15%)
    discountedPrice(product) {
        if (product.discount > 0) return product.price * (1 - product.discount);
        else return product.price
    }
}
