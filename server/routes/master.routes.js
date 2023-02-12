const express = require("express");
const Masters = require("../models/Masters");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
    try {
        const list = await Masters.find();
        res.status(200).send(list);
    } catch (e) {
        res.status(500).json({ message: "На сервере произошла ошибка." });
    }
});
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const list = await Masters.findById(id);
        res.status(200).send(list);
    } catch (e) {
        res.status(500).json({ message: "На сервере произошла ошибка." });
    }
});
router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const list = await Masters.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).send(list);
    } catch (e) {
        res.status(400).json({ message: "На сервере произошла ошибка." });
    }
});
router.delete("/:id", async (req, res) => {
    try {
        const { masterId } = req.params;
        const list = await Masters.findByIdAndDelete(masterId, req.body);
        res.status(200).send(list);
    } catch (e) {
        res.status(500).json({ message: "На сервере произошла ошибка." });
    }
});

module.exports = router;
