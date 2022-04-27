const loginRoutes = require('./login');
const logoutRoutes = require('./logout');
const signupRoutes = require('./signup');
const privateRoutes = require('./private');
const homeRoutes = require('./home');
const courseRoutes = require('./course');
const coursesRoutes = require('./courses');
const professorsRoutes = require('./professors');
const backstageRoutes = require('./backstage');

const constructorMethod = (app) => {
    app.use('/login', loginRoutes);
    app.use('/logout', logoutRoutes);
    app.use('/signup', signupRoutes);
    app.use('/private', privateRoutes);
    app.use('/home', homeRoutes);
    app.use('/course', courseRoutes);
    app.use('/courses', coursesRoutes);
    app.use('/professors', professorsRoutes);
    app.use('/backstage', backstageRoutes);

    app.get('/', (req, res) => {
        return res.redirect('home');
        //res.sendFile('home.html');
    });

    app.use('*', (req, res) => {
        res.status(404).json({ error: 'Page Not found' });
    });
};

module.exports = constructorMethod;
