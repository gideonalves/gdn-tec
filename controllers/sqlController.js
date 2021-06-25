const sqlController = {

    atributosSql: (req,res) => {

        const {item} = req.params

        return res.render("pgnSql/pgn_sql",{item}) 
    }

}

module.exports = sqlController