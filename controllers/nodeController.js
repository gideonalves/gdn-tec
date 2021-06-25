const nodeController = {

    atributosNode: (req,res) => {

        const {item} = req.params

        return res.render("pgnNode/pgn_node",{item}) 
    }

}

module.exports = nodeController