var express = require('express'),
    app = express();


app.get('http://127.0.0.1:1337/api/auth/user', function(req, res) {
    console.log(req);
});

app.listen(1337, function (req, res) {
    console.log('Started');
});




