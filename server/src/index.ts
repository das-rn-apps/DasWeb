import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'dotenv/config';
import http from 'http';
import { Server, Socket } from 'socket.io';
import connectDB from './utills/db';
import ApiRouter from './controllers/Routes';

const app: Application = express();
const server: http.Server = http.createServer(app);

const io: Server = new Server(server, {
    cors: {
        origin: 'http://localhost:8081',
        methods: ['GET', 'POST'],
        credentials: true
    }
});

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 1000;

(async () => {
    try {
        await connectDB();
    } catch (err) {
        console.error('Database connection failed', err);
        process.exit(1);
    }

    // Middleware setup
    app.use(cors()); // Enable CORS
    app.use(express.json({ limit: '5mb' }));
    app.use(express.urlencoded({ limit: '5mb', extended: true }));

    // Routes setup
    app.use('/', ApiRouter);

    // Socket.IO setup
    io.on('connection', (socket: Socket) => {
        console.log(socket.id, 'is online');

        socket.on('send_message', (message: any) => {
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
