const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const configRoutes = require('./routes');
const Handlebars = require('handlebars');
const app = express();

Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for(var arg in arguments){
        if(typeof arguments[arg]!='object'){
            outStr += arguments[arg];
        }
    }
    return outStr;
});

app.use(express.static(__dirname + '/public/'));

// app.get('/', (req, res) => {
//   res.sendFile('index.html');
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handlebars setting
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(
    session({
        name: 'AuthCookie',
        secret: 'some secret string!',
        resave: false,
        saveUninitialized: true
}));

configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:3000');
});
