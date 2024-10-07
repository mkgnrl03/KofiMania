import type { Coffee } from "../types.js";
import { Request, Response } from "express"; 
import { coffees } from "../data/coffees.js";
import { validate } from "uuid"; 

export class CoffeeController {
    
    async getCoffees(req: Request, res: Response): Promise<void> {

        let filter = req.query.filter;
        let value = req.query.value;

        if(!filter && !value){
            res.status(200).send({ data: coffees });
            return;
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
    }

    async findCoffee(req: Request, res: Response): Promise<void> {
        let id = req.params.id

        if(!validate(id)) { 
            res.status(400).send({ message: "Invalid id" });
            return;
        }
        const isFound = coffees.find(coffee => coffee.id === id);
        if(!isFound){
            res.status(404).send({ message: "Item not found" });
            return;
        }
        res.status(200).send({ data: isFound });
    }

}