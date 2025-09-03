import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/text") {
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, this is plain text!");

  } else if (req.url === "/html") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hello, this is HTML!</h1>");

  } else if (req.url === "/json") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Hello, this is JSON!" }));

  } else if (req.url === "/image") {
    res.setHeader("Content-Type", "image/png");
    res.end("...binary image data..."); // normally you'd stream a PNG file
  } else {
    res.setHeader("Content-Type", "text/plain");
    res.end("404 - Not Found");
  }
});

server.listen(3000, () => console.log("✅ Server running on http://localhost:3000"));
