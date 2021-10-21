const http = require("http");
const port = 9090;

const server = http.createServer((req, res) =>
{
    res.write("Hello this is my first server class");
    console.log("this server created");
    res.end();
});

server.listen(port, () => {
    console.log(`listening on prot ${port}`);
});