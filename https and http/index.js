// import http from 'http'
// import url from 'url'

// const server = http.createServer((req, res) => {
//   res.statusCode = 200; // OK
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   const parsedUrl = url.parse(req.url,true)
//     const pathname = parsedUrl.pathname;
//     const method = req.method

//   if (pathname === '/' && method === 'GET') {
//     res.end("Welcome to Home page");
//   } else if (pathname === '/about') {
//     res.end("About page");
//     console.log(pathname)
//   } else if (pathname === '/search') {
//     res.end("Search page");
//     res.end(parsedUrl.query)
//   } else if (pathname === '/user') {
//     res.end(pathname)
//   } else if (pathname.startsWith("/products/:id")) {
//     console.log("URL:", req.url);         // /products/10?sort=asc
//     console.log("Path:", pathname);       // /products/10
//     console.log("Query:", parsedUrl.query);     // { sort: "asc" }
//     console.log("Params:", pathname.split("/"));   // { id: "10" }
//     res.end("Product details fetched ✅");
//   }


//   // const parsedUrl = url.parse(req.url, true);
//   //   const pathname = parsedUrl.pathname;

//   //   if (pathname === "/search" && req.method === "GET") {
//   //     const searchQuery = parsedUrl.query.search_query; // 👈 changed here
//   //     const userName = parsedUrl.query.user;
//   //     res.writeHead(200, { "Content-Type": "text/plain" });
//   //     res.end(`You searched for: ${searchQuery} and user is ${userName}`);
//   //   } else {
//   //     res.writeHead(404, { "Content-Type": "text/plain" });
//   //     res.end("404 - Not Found");
//   //   }

// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000/");
// });


import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // true => parse query string
  const method = req.method;
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  res.setHeader("Content-Type", "application/json"); // send JSON response
  

  if (pathname === "/" && method === "GET") {
    res.end(JSON.stringify({ message: "Welcome to Home page" }));

  } else if (pathname === "/about") {
    res.end(JSON.stringify({
      message: "About page",
      path: pathname
    }));

  } else if (pathname === "/search") {
    res.end(JSON.stringify({
      message: "Search page",
      path: pathname,
      query: query   // send query to client
    }));

  } else if (pathname.startsWith("/products/")) {
    const id = pathname.split("/")[2]; // extract :id param
    res.end(JSON.stringify({
      message: `Product details fetched ✅`,
      url: req.url,
      path: pathname,
      query: query,
      params: { id }
    }));

  } else {
    res.end(JSON.stringify({
      error: "404 Not Found",
      path: pathname
    }));
  }
});

server.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
