exports.somaSimples = (req, res) => {
    let a = req.body.a;
    let b = req.body.b;
    
    res.json(a+b);

    return res;
};