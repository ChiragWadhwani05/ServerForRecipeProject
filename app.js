import express from "express";
import cors from "cors";
import dotenv, { config } from "dotenv";
const app = express();
dotenv.config();
const api_key =process.env.API_KEY;
const api_id =process.env.API_ID;
const port=process.env.PORT;

app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200,
}));
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('HIIIIIIII......');
    res.end();
});

app.get('/api', async (req, res) => {
    try {
        const response = await fetch(`https://api.edamam.com/search?q=${req.query.keyword}&app_id=${api_id}&app_key=${api_key}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data from Edamam API:', error);
    }
});

app.listen(port,"0.0.0.0", ()=> {
    console.log("App chalu ho gyi hai");
});