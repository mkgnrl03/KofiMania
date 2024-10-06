import dotenv from "dotenv";
import express, { Request, Response} from "express";
import { coffees } from "./data/coffees.js";
import { validate } from "uuid"; 
import { Coffee } from "./data/types.js";

const app = express();
dotenv.config();

app.get('/', (req: Request, res: Response) => {
    res.status(200)
       .send({ message: "Hello World" });
})

app.get('/api/coffees', (req: Request, res: Response) => {

    let filter = req.query.filter;
    let value = req.query.value;

    if(!filter && !value){
        res.status(200).send({ data: coffees })  
    } 
    if (filter && !value || value && !filter) {
        res.status(400).send({ data: "Invalid query params combination" })  
        return;
    }
    
    filter = filter.toLocaleString().toLowerCase();
    value =  value.toLocaleString().toLowerCase();

    let filteredResponse: Coffee[] = [];

    if(filter === "ingredients"){
        filteredResponse = coffees.filter(coffee => coffee.ingredients.includes(value))
    } 
    else if(filter === "name" || filter === "type") {
        filteredResponse = coffees.filter(coffee => 
            coffee[filter].toLowerCase().includes(value)
        )
    } else {
        res.sendStatus(404).send({ message: "No Coffee found." })
    }

    res.status(200).send({ data: filteredResponse })
})

app.get('/api/coffees/:id', (req: Request, res: Response) => {
    let id = req.params.id
    if(!validate(id)) 
        res.status(400).send({ message: "Invalid id" });

    const isFound = coffees.find(coffee => coffee.id === id);

    if(!isFound)
        res.status(404).send({ message: "Item not found" });

    res.status(200).send({ data: isFound });
})


app.listen(process.env.PORT, () => { 
    console.log(`server running at localhost:${process.env.PORT}`)
});
