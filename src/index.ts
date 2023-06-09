import http from "http";

const server = http.createServer((req, res) => {
    res.write('Hello World!');
    res.end();
});

server.listen(3000, () => {
    console.log('Server is running on port 3000. Go to http://localhost:3000/')
});