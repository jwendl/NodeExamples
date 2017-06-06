var restify = require('restify');
var server = restify.createServer();

server.get('/hello/:name', function (request, response, next) {
    response.send('hello ' + request.params.name);
    return next();
});

server.head('/hello/:name', function (request, response, next) {
    response.send('hello ' + request.params.name);
    return next();
});

server.post('/hello', function (request, response, next) {
    response.send(201, Math.random().toString(36).substr(3, 8));
    return next();
});

server.listen(80, function() {
    console.log('%s listening at %s', server.name, server.url);
});