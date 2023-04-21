import {createProxyMiddleware} from "http-proxy-middleware"

const HyperExpress = require("hyper-express")
const server = new HyperExpress.Server()

server.get("/:url", (req, res) => {
    return createProxyMiddleware({
        target: req.path_parameters.url,
        changeOrigin: true
    })
})

server.listen(80)
    .then(() => console.log("Webserver started on port 80"))
    .catch(() => console.log("Failed to start webserver on port 80"))
