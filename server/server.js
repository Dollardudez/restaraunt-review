
require("dotenv").config();
const express = require('express');
const db = require('./db');
const morgan = require('morgan');
const app = express();

app.use(express.json());

//Get all restaurants
app.get("/api/v1/restaurants", async (req, res)=>{
    try{
        const allRestaurants = await db.query("SELECT * FROM restaurants");
        console.log(allRestaurants);
        res.status(200).json({
        status: "success",
        results : allRestaurants.rows.length,
        data: {
            restaurants: allRestaurants.rows,
        }
    })
    }
    catch(err){
        console.log(err);
    }
});

// Get a Restaurant
app.get("/api/v1/restaurants/:id", (req, res)=>{
    console.log(req.body);
    res.status(200);
});

//Create a Restaurant
app.post("/api/v1/restaurants", (req, res)=>{
    console.log(req.body);
});

//Update a Restaurant
app.put("/api/v1/restaurants/:id", (req, res)=>{
    console.log(req.body);
});

//Delete a Restaurant
app.delete("/api/v1/restaurants/:id", (req, res)=>{
    console.log(req.body);
});

const port = process.env.PORT || 3000;
const string = 'hello ${Groege}';
app.listen(port, ()=>{
    console.log(`server is up and listening on ${port}`);
});