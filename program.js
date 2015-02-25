    var express = require('express')
    var app = express()

    app.get('/', function(req, res) {
      res.end('Hello World!')
    })

    var port = 3000;
    console.log('listening on port: '+ port);
    app.listen(port);
