const express = require('express');
const exphbs = require('express-handlebars');
const configRoutes = require('./routes');
const app = express();

app.use(express.static(__dirname+'/public/'));

// app.get('/', (req, res) => {
//   res.sendFile('index.html');
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handlebars setting
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});

