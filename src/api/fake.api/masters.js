const masters = [
    {
        _id: 1,
        name: "Виктор",
        rate: 4,
        class: 5,
        availabilityForToday: [
            "8:30",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00"
        ],
        availabilityForTomarrow: [
            "8:30",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00"
        ],
        availabilityForAfterTomarraw: [
            "8:30",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00"
        ]
    },
    {
        _id: 2,
        name: "Женя",
        rate: 4,
        class: 5,
        availabilityForToday: [
            "8:30",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00"
        ],
        availabilityForTomarrow: [
            "8:30",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00"
        ],
        availabilityForAfterTomarraw: [
            "8:30",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00"
        ]
    },
    {
        _id: 3,
        name: "Андрей",
        rate: 4,
        class: 5,
        availabilityForToday: [
            "8:30",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00"
        ],
        availabilityForTomarrow: [
            "8:30",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00"
        ],
        availabilityForAfterTomarraw: [
            "8:30",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00"
        ]
    },
    {
        _id: 4,
        name: "Николай",
        rate: 4,
        class: 5,
        availabilityForToday: [
            "8:30",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00"
        ],
        availabilityForTomarrow: [
            "8:30",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00"
        ],
        availabilityForAfterTomarraw: [
            "8:30",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00"
        ]
    },
    {
        _id: 5,
        name: "Кирилл",
        rate: 4,
        class: 5,
        availabilityForToday: [
            "8:30",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00"
        ],
        availabilityForTomarrow: [
            "8:30",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00"
        ],
        availabilityForAfterTomarraw: [
            "8:30",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00"
        ]
    }
];

// export default masters;

export const fetchAll = () =>
    new Promise((resolve) => setTimeout(() => resolve(masters), 2000));

export const fetchClasses = () =>
    new Promise((resolve) => {
        const uniqueClasses = masters;
        setTimeout(() => {
            resolve(uniqueClasses);
        }, 2000);
    });
