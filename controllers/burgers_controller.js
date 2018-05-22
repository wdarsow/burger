const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

console.log("burgers_controller.js has been called")
// routes
router.get("/", function(req, res) {
    console.log("router.get has been called")
    //res.render("index")
    burger.selectAll(function(data) {
        let handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        res.render("index", {burgersforloop: data});
        //console.log("processing response.render in the router.get")
        //res.render("index", handlebarsObject);
    })
})

router.post("/api/burgers", function(req, res) {
    console.log("the router.post route has been called");
    burgers.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        // sending the id back of the newly created entry
        res.json({ id: result.insertId })
    });
});

router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if(result.changedRows == 0) {
            // there's no matching id
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;