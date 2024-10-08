import dotenv from "dotenv";
import express, { Request, Response} from "express";
import { CoffeeController } from "./controllers/CoffeeController.js";

const app = express();
dotenv.config();

app.get('/api/coffees', async (req: Request, res: Response) => {
    await new CoffeeController().getCoffees(req, res)
})

app.get('/api/coffees/:id', async (req: Request, res: Response) => {
    await new CoffeeController().findCoffee(req, res)
})

app.get('*', (req: Request, res: Response) => {
    res.status(404).send('<h1>404 not found.</h1>');
})

app.listen(process.env.PORT, () => { 
    console.log(`server running at localhost:${process.env.PORT}`)
});
