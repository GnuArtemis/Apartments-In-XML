//Backend Routes for accessibility.

const mongoose = require('mongoose');
const router = require("express").Router();

const apartmentDB = require("../models/Apartment");
const searchXML = require("../utils/searchXML")


//Retrieves current data from the provided XML source, and returns a JSON representation.
router.get("/", (req,res)=> {
    const newListings = searchXML;
    newListings.then(data => {
        res.send(data)
    }, err => {
        res.send(err)
    })
})

//Retrieves all data saved in the database.
router.get("/savedListings",(req,res)=> {
    apartmentDB.find({})
    .then(dbApartments => {
        res.send(dbApartments);
    }, err => {
        res.send(err)
    })
})

//Saves the information retrieved from the XML source to the database.
router.post("/save", (req,res) => {
    const newListings = searchXML;
    newListings.then(data => {
        apartmentDB.create(data)
        .then(dbConfirm => {
            res.status(200).send(dbConfirm);
        }, err => {
            res.send(err)
        })
    }, err => {
        res.send(err)
    })
})

module.exports = router;