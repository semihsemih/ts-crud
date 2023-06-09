import http from "http";
import { getTasks } from "./controller/controller";

const server = http.createServer((req, res) => {
    if (req.method == "GET" && req.url == "/") {
        res.write('Hello World!');
        res.end();
    }

    if (req.method == "GET" && req.url == "/api/tasks") {
        return getTasks(req, res);
    }
});

server.listen(80, () => {
    console.log('Server is running on port 80. Go to http://localhost/')
});