module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendfile('public/views/login.html');
        //Dòng này có nghĩa là tất cả request đến ứng dụng đều được đẩy tới view index.html xử lý.
    });
};