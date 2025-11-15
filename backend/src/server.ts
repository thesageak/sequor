import express, { Request, Response } from 'express';
import cors from 'cors'
import mangaRoutes from './routes/mangaRoutes';
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors())

app.use('/api', mangaRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

export default app;
