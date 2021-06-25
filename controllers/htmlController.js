const htmlController = {

    index: async (_,res) => {
        return res.render("pgnHtml/pgn_html", {item:0}) 
    },
    atributos: (req, res) => {

        const { item } = req.params

        return res.render("pgnHtml/pgn_html", { item })
    }

}

module.exports = htmlController