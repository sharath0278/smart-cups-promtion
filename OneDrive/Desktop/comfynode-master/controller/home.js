exports.getRenderHome = (req, res) => {
    return res.render('index', {})
};
exports.getRenderDetail = (req, res) => {
    return res.render('buyPage', {})
};


exports.getRenderCart = (req, res) => {
    return res.render('cart', {})
};


exports.getRenderBilling = (req, res) => {
    return res.render('billing-form', {})
};
