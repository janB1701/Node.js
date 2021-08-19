const http = require ('http');

let counter = 0;

http.createServer (function(req, res) {
    const h = document.createElement ("h1");
    h.style.color = "red";
    counter += req.url === '/';
    res.writeHead (200);
    h.innerHTML = "This site has been visited > " + counter + " times!";
    document.body.appendChild (h);
    res.end();
    //res.end ("This site has been visited > " + counter + " times!");
}).listen(80);
