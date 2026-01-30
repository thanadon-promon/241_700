const http  = require("http");
const host ='localhost';
const port = 3000;


const requireListener = function (req, res) {
    res.writeHead(200);
    res.end("Hello, World! This is my First server\n");
}

const server = http.createServer(requireListener);

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});