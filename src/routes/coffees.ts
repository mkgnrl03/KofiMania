import { Router, Request, Response } from 'express';
import { CoffeeController } from '../controllers/CoffeeController.js';

const coffeeRouter = Router();

coffeeRouter
    .get('/api/coffees', async (req: Request, res: Response) => {
        await new CoffeeController().getCoffees(req, res)
    })
    .get('/api/coffees/:id', async (req: Request, res: Response) => {
        await new CoffeeController().findCoffee(req, res)
    })

export default coffeeRouter;