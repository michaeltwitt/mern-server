const express = require('express');
const Book = require('../Models/book');

const router = express.Router();

// GET /book
router.get('/', (req, res) => {
    Book.find()
        .then(book => res.send(book))
        .catch(error =>
            res.status(500).send({
                error: error.message
            })
        );
});

// POST /book
router.post('/', (req, res) => {
    const { title, content, date } = req.body;
    console.log('POST to /books');
    Book.create({
        title,
        content,
        date
    })
        .then(book => res.send(book))
        .catch(error =>
            res.status(500).send({
                error: error.message
            })
        );
});

module.exports = router;
