import { Router, Request, Response } from 'express';

const errorRouter = Router();

errorRouter
    .get('*', (req: Request, res: Response) => {
        res.status(404)
           .send('<h1>404 not found.</h1>')
    })

export default errorRouter;