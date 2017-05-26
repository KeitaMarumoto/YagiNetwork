var express = require('express');
var app = express();
var port = 8888;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.send("I'm working like on egg.");
});

app.get('/scream', function(req, res){
    res.send('ギャーーーーーーー！！');
});

app.get('/now',  function(req, res){
    res.send(new Date());
})

app.listen(port, function(){
    console.log('Server is listening to ' + port);
});
