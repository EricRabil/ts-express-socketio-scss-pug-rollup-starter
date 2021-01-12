import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";

const app = express();
const server = new http.Server(app);
const io = new Server(server);

app.set("view engine", "pug");
app.set("view cache", false);
app.set("views", path.resolve(__dirname, "..", "templates"));

app.locals.env = process.env;

const staticPath = (folder: string) => path.resolve(__dirname, "..", folder);
const makeStatic = (folder: string) => express.static(staticPath(folder));
app.use("/css", makeStatic("css"));
app.use("/js", makeStatic("client-dist"));

app.get("/", (req, res) => {
    res.render("page");
});

io.on("connection", () => {

});

server.listen(3000, () => {
    console.log("heloo");
});