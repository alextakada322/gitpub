const express = require('express');
const app = express();
const port = 3000;

const drinks = require("./models/drinks.js")
const food = require("./models/food.js")

// Route: Match http://localhost:3000/ to send " "
app.get('/drinks/', (req, res) => { 
    res.render('drinks_index.ejs',
    {
        allDrinks:drinks,
        allFood:food,
    });
});

app.get('/food/:indexOfFoodArray', (req, res) => {
    res.render('food_show.ejs', {item: food[req.params.indexOfFoodArray]})
});
//////////////////////////////////////////////////////////////
// Seting up SHOW ROUTE
// app.get('/drinks/:id', (req, res) => {
//     res.send(req.params.id)
// });

//////////////////////////////////////////////////////////////

app.get('/drinks/:indexOfDrinksArray', (req, res) => {
    res.render('drinks_show.ejs', {drink: drinks[req.params.indexOfDrinksArray]});
});




// Web Server. listen on port 3000
app.listen(port, () => {
    console.log("Hello Alex. I'm listening...");
});