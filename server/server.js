
require("dotenv").config();
const express = require('express');
const db = require('./db');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//cors middleware
app.use(cors());
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
app.get("/api/v1/restaurants/:id", async (req, res)=>{
    try{
        const queryResult = await db.query("SELECT * FROM restaurants where id = $1", [req.params.id]);

            res.status(200).json({
                status: "success", 
                results : queryResult.rows.length,
                    data: {
                    restaurant: queryResult.rows[0]
                }
            });
        
    }
    catch(e){
        console.log(e);
    }

    
});

//Create a Restaurant
app.post("/api/v1/restaurants", async (req, res)=>{
    try{
        const queryResult = await db.query("INSERT INTO restaurants(name, location, price_range)" + 
                                            "VALUES($1, $2, $3) RETURNING *;", [req.body.name, req.body.location, req.body.price_range]);
        res.status(200).json({
            status: "success", 
            results : queryResult.rows.length,
                data: {
                restaurant: queryResult.rows[0]
            }
        });
    }
    catch(e){
        console.log(e);
    }
});

//Update a Restaurant
app.put("/api/v1/restaurants/:id", async (req, res)=>{
    try{
        const queryResult = await db.query("UPDATE restaurants" + 
                                           " SET" +  
                                                " name = $1," +
                                                " location = $2," + 
                                                " price_range = $3" + 
                                            " WHERE id = $4 RETURNING *;",
                                                [req.body.name, req.body.location, req.body.price_range, req.params.id]);
        res.status(200).json({
            status: "success", 
            results : queryResult.rows.length,
                data: {
                    restaurant: queryResult.rows[0],
            }
        });
    }
    catch(e){

    }
});

//Delete a Restaurant
app.delete("/api/v1/restaurants/:id", async (req, res)=>{
    try{
        const queryResult = await db.query("DELETE FROM restaurants" + 
                                           " WHERE id = $1;", [req.params.id]);
        res.status(204).json({
            status: "success",
        });
    }
    catch(e){

    }
});

const port = process.env.PORT || 3000;
const string = 'hello ${George}';
app.listen(port, ()=>{
    console.log(`server is up and listening on ${port}`);
});