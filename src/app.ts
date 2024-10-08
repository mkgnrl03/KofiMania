import dotenv from "dotenv";
import express from "express";
import coffeeRouter from "./routes/coffees.js";
import errorRouter from "./routes/error.js";
// import path from "node:path";
// import expressLayouts from 'express-ejs-layouts';

dotenv.config();
const app = express();

// EJS setup
// app.use(expressLayouts);
// app.set('view engine', 'ejs');
// app.set('views', path.join(path.dirname(import.meta.url), 'views'));

app.use(coffeeRouter);
app.use(errorRouter);

app.listen(process.env.PORT, () => { 
    console.log(`server running at localhost:${process.env.PORT}`)
});

