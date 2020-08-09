const express = require('express');
const router = express.Router();

//Mongoose Schema

const Item = require('../../models/Item');

// @route POST api/items
// @desc Create A Post
// @access Public

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number
    });

    newItem.save().then(item => res.json(item));

});

module.exports = router;

