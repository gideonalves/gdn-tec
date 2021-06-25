const express = require('express')
const routes = express.Router() 
const htmlController = require('./controllers/htmlController') 
const cssController = require('./controllers/cssController') 
const jsController = require('./controllers/jsController') 
const nodeController = require('./controllers/nodeController.js') 
const githubController = require('./controllers/githubController') 
const sqlController = require('./controllers/sqlController') 

// Rotas
routes.get('/', function(req, res) {  
     return res.redirect("/pgnHtml") 
})

routes.get("/pgnHtml", function (req, res) { 
    return res.render("pgnHtml/pgn_html")   
})

// Routes of html 
routes.get("/pgnHtml", htmlController.index)
routes.get("/pgnHtml/:item", htmlController.atributos )

// rotas css
routes.get("/pgnCss", function (res, res) {
    return res.render("/pgnCss/pgn_css", {item:0})
})

routes.get("/pgnCss/:item", cssController.atributosCss )

// rotas javascript
routes.get("/pgnJs", function (res, res) {
    return res.render("/pgnJs/pgn_js", {item:0})
})

routes.get("/pgnJs/:item", jsController.atributosJs )

// rotas node
routes.get("/pgnNode", function (res, res) {
    return res.render("/pgnNode/pgn_node", {item:0})
})

routes.get("/pgnNode/:item", nodeController.atributosNode )

// rotas GitHub
routes.get("/pgnGithub", function (res, res) {
    return res.render("/pgnGithub/pgn_github", {item:0})
})

routes.get("/pgnSql/:item", sqlController.atributosSql)

// rotas SQl
routes.get("/pgnSql", function (res, res) {
    return res.render("/pgnSql/pgn_sql", {item:0})
})

routes.get("/pgnSql/:item", sqlController.atributosSql)

module.exports = routes
