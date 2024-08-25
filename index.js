const express = require("express");
const { connectDB } = require("./src/utils/db")
const env = require("dotenv")
env.config()
const router = require("./src/api/routes/characters.routes")
const cors= require("cors");
connectDB();
const server = express();
const PORT = process.env.PORT; // usamos la variable de entorno PORT
server.use(cors())
server.use(express.json())
server.use("/",router)

server.listen(PORT, () => {
    console.log(`listen port http://localhost:${PORT} `)
})

// modelos --> estructuras de BD (colecciones),
// vistas, --> routes
// controladores--> funcionalidad para acceder a la BD
//utils--> funciones de validaciones, conexion de BD, middleware