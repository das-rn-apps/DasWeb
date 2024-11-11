"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const db_1 = __importDefault(require("./utills/db"));
const Routes_1 = __importDefault(require("./controllers/Routes"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: 'http://localhost:8081',
        methods: ['GET', 'POST'],
        credentials: true
    }
});
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 1000;
(async () => {
    try {
        await (0, db_1.default)();
    }
    catch (err) {
        console.error('Database connection failed', err);
        process.exit(1);
    }
    // Middleware setup
    app.use((0, cors_1.default)()); // Enable CORS
    app.use(express_1.default.json({ limit: '5mb' }));
    app.use(express_1.default.urlencoded({ limit: '5mb', extended: true }));
    // Routes setup
    app.use('/', Routes_1.default);
    // Socket.IO setup
    io.on('connection', (socket) => {
        console.log(socket.id, 'is online');
        socket.on('send_message', (message) => {
            console.log(message);
            io.emit('receive_message', message);
        });
        socket.on('disconnect', () => {
            console.log(socket.id, 'went offline');
        });
    });
    // Start server
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})();
