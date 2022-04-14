const express = require('express');
const Game = require('../models/Game');

const info = (req, res, next) => {
    const data = req.body;
    Game.create(data, function (err, data) {
        if (err) {
            res.json({
                success: false,
                data: err,
            });
        } else {
            res.json({
                success: true,
                data: data
            })
        }
    })
}

const get_dice = (req, res, next) => {
    Game.find({}, function (err, data) {
        if (err) {
            res.json({
                success: false,
                data: err,
            });
        } else {
            res.json({
                success: true,
                data: data
            })
        }
    })
}

const save_info = (req, res, next) => {
    Game.findOneAndDelete({ isbn: req.params._id })
        .then((data) => res.json(data))
        .catch(err => res.json({ success: false, data: err }))
}

module.exports = {
    info,
    get_dice,
    save_info
}