const constructorMethod = app => {
    app.get("/", (req, res) => {
        res.status(200).json({ message: "200 OK" })
    })
  
    app.use("*", (req, res) => {
        res.status(404).json({ error: "404 Page Not found" })
    })
  }
  
  module.exports = constructorMethod