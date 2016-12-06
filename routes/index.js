module.exports = function (app) 
{
    app.get('/', function (req, res) {
        res.sendfile('public/views/login.html');
    });
    app.get('/404', function (req, res) {
        res.sendfile('public/views/404.html');
    });
    app.get('/home', function (req, res) {
        res.sendfile('public/views/home/index.html');
    });
    app.get('/user', function (req, res) {
        res.sendfile('public/views/user/index.html');
    });
    app.get('/deparment', function (req, res) {
        res.sendfile('public/views/deparment/index.html');
    });
    app.get('/position', function (req, res) {
        res.sendfile('public/views/position/index.html');
    });
    app.get('/news', function (req, res) {
        res.sendfile('public/views/news/index.html');
    });
    app.get('/newscategory', function (req, res) {
        res.sendfile('public/views/newsCategory/index.html');
    });
    app.get('/product', function (req, res) {
        res.sendfile('public/views/product/index.html');
    });
    app.get('/productgroup', function (req, res) {
        res.sendfile('public/views/productGroup/index.html');
    });
    app.get('/actionlog', function (req, res) {
        res.sendfile('public/views/actionLog/index.html');
    });
    app.get('/menu', function (req, res) {
        res.sendfile('public/views/menu/index.html');
    });
    app.get('/role', function (req, res) {
        res.sendfile('public/views/role/index.html');
    });
};

