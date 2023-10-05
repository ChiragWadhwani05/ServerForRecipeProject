import express from "express";
import cors from "cors";
import dotenv, { config } from "dotenv";
const app = express();
dotenv.config();
const api_key =process.env.API_KEY;
const api_id =process.env.API_ID;

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    optionsSuccessStatus: 200,
}))


app.get('/api', async (req, res) => {
    try {
        const response = await fetch(`https://api.edamam.com/search?q=${req.query.keyword}&app_id=${api_id}&app_key=${api_key}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data from Edamam API:', error);
    }
});

app.listen(3000);