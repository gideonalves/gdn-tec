const cssController = {

    atributosCss: (req,res) => {

        const {item} = req.params

        return res.render("pgnCss/pgn_css",{item}) 
    }

}

module.exports = cssController