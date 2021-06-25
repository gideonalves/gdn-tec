const githubController = {

    atributosGit: (req,res) => {

        const {item} = req.params

        return res.render("pgnGithub/pgn_github",{item}) 
    }

}

module.exports = githubController