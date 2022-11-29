const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        rate: {
            type: String,
            required: true,
        },
        class: {
            type: String,
            required: true,
        },
        availabilityForToday: {
            type: Array,
            required: true,
        },
        availabilityForTomarrow: {
            type: Array,
            required: true,
        },
        availabilityForAfterTomarraw: {
            type: Array,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = model("Masters", schema);

// {
//     "_id": 1,
//     "name": "Павел",
//     "rate": 1,
//     "class": "2",
//     "availabilityForToday": [
//         "8:30",
//         "9:00",
//         "10:00",
//         "11:00",
//         "12:00",
//         "13:00"
//     ],
//     "availabilityForTomarrow": [
//         "8:30",
//         "9:00",
//         "10:00",
//         "11:00",
//         "12:00",
//         "13:00"
//     ],
//     "availabilityForAfterTomarraw": [
//         "8:30",
//         "9:00",
//         "10:00",
//         "11:00",
//         "12:00",
//         "13:00"
//     ]
// },
