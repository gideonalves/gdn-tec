const jsController = {

    atributosJs: (req,res) => {

        const {item} = req.params

        return res.render("pgnJs/pgn_js",{item}) 
    }

}

module.exports = jsController