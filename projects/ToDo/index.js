import http from "http";
import url from "url";
import * as fs from 'fs/promises'

const loadTodos = async () => {
    try {
        const data = await fs.readFile("data.json", "utf8");  // reading the data.json file
        return JSON.parse(data);   // parsing the data to object 
    } catch (err) {
        console.log(err)
        return [];  // return empty list of todo
    }
}

const saveTodos = async (content) => {
    await fs.writeFile("data.json", JSON.stringify(content, null, 2));  // null,2 handles the format and writing the content to data.sjon file
}

const addTodos = async (content) => {
    try {
        const todos = await loadTodos();
        const newTodo = { id: Date.now(), content }  // created newtodo object and push to previous todo
        todos.push(newTodo);
        await saveTodos(todos);  // save the newly todo to data.json
        console.log("Added succesfully");
    } catch (err) {
        console.log(err);
    }
}

const deleteTodos = async (id) => {
    try {
        const todos = await loadTodos();
        const updatedTodos = todos.filter(todo => todo.id !== id);  //filter the todo by id and update the todo list
        await saveTodos(updatedTodos);
        console.log("Deleted:", id);
    } catch (err) {
        console.error("Error deleting todo:", err);
    }
};



const server = http.createServer(async (req, res) => {
    res.setHeader("Content-Type", "text/plain");

    const parsedUrl = url.parse(req.url, true);
    //   console.log(parsedUrl);

    if (req.method === "PUT" && parsedUrl.pathname === "/api/add") {
        const query = parsedUrl.query.task;  // /api/add/?task=HTML
        await addTodos(query);
        // console.log(query)

        res.end(JSON.stringify({ todo: query }));  //sending data to url
    } else if (req.method === "GET" && parsedUrl.pathname === "/read") {
        res.writeHead(200, { "Content-Type": "application/json" });

        const todoData = await loadTodos();
        res.end(JSON.stringify({ todo: todoData }));

    } else if (req.method === "DELETE" && parsedUrl.pathname.startsWith("/delete/")) {
        const id = parsedUrl.pathname.split("/")[2]; // e.g. /delete/12345

        await deleteTodos(Number(id)); // remove it
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Todo deleted", id }));
    }
    else {

        const data = await fs.readFile("index.html", "utf8");  // rendering the index.html file
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);

    }
});

server.listen(3000, () => {
    console.log(`✅ Server is running at http://localhost:3000`);
});
