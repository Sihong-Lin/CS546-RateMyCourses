
const constructorMethod = app => {
    app.get("/", (req, res) => {
        res.render('200')
    })
  
    app.use("*", (req, res) => {
    res.render('404')
    })
  }
  
  module.exports = constructorMethod