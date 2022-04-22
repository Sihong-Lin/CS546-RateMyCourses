
const constructorMethod = app => {
    app.get("/", (req, res) => {
        res.sendFile('index.html');
    })
  
    app.use("*", (req, res) => {
    res.render('404')
    })
  }
  
  module.exports = constructorMethod