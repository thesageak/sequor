import express, { Request, Response } from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import mangaRoutes from './routes/mangaRoutes';
import trackingRoutes from './routes/trackingRoutes';
const PORT = 3000;

const app = express();

mongoose.connect(
    "mongodb+srv://sageaguinakang_db_user:Cd0xqEmVv3zH6GEN@sequor.rruyzsj.mongodb.net/?appName=Sequor"
);

app.use(express.json());
app.use(cors())

app.use('/api/tracking', trackingRoutes);
app.use('/api/manga', mangaRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

export default app;
