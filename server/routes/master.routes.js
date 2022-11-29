const express = require("express");
const Masters = require('../models/Masters')
const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
    try {
        const list = await Masters.find();
        res.status(200).send(list)
    } catch (e) {
        res.status(500).json({message: 'На сервере произошла ошибка.'})
    }
})

module.exports = router;
