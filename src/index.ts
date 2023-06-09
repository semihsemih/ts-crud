import http from "http";

const server = http.createServer((req, res) => {
    res.write('Hello World!');
    res.end();
});

server.listen(80, () => {
    console.log('Server is running on port 80. Go to http://localhost/')
});