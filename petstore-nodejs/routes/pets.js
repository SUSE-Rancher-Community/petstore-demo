const express = require('express');
const router = express.Router();
const db = require("../models");
const Pets = db.pets;
const Op = db.Sequelize.Op;


/* GET users listing. */
router.get('/', function(req, res, next) {
    Pets.get()
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message:
                    error.message || "Error when getting pets from the database!"
            });
        });
});

router.post('/', function(req, res, next) {
    const pet = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        inventory: req.body.inventory
    }

    Pets.create(pet)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message:
                    error.message || "Error when saving pet to the database!"
            });
        });
});


module.exports = router;
