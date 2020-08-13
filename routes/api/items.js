const express = require('express');
const router = express.Router();

//Mongoose Schema

const Item = require('../../models/Item');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date:-1})
        .then(items => res.json(items));
});

// @route POST api/items
// @desc Create A Post
// @access Public

router.post('/', (req, res) => {
    
    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;
    
    const newItem = new Item({
        name,
        email,
        number
    });

    newItem.save()
        .then(item => res.json(item))
        .catch(err => console.log(err));

});

// @route DELETE api/items
// @desc Delete A Post
// @access Public

router.delete('/:id', (req, res) => {
   Item.findById(req.params.id)
       .then(item => item.remove().then(() => res.json({success: true})))
       .catch(err => res.status(404).json({success: false}));
});

module.exports = router;

