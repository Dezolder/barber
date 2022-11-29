const mastersMock = require("../mock/masters.json");
const Masters = require("../models/Masters");

module.exports = async () => {
    const masters = await Masters.find();
    if (masters.length !== mastersMock.length) {
        await createInitialEntity(Masters, mastersMock)
    }
};

async function createInitialEntity(Model, data) {
    await Model.collection.drop()
    return Promise.all(
        data.map(async item => {
            try {
                delete item._id
                const newItem = new Model(item)
                await newItem.save()
                return newItem
            } catch (err) {
                return err
            }
        })
    )
}