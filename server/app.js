const express = require("express");
const mongoose = require("mongoose");
const chalk = require("chalk");
const config = require("config");
const initDatabase = require("./startup/initDatabase");
const routes = require('./routes')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', routes)

const PORT = config.get("port") ?? 8080;

async function start() {
    try {
        mongoose.connection.once("open", () => {
            initDatabase()
        });
        await mongoose.connect(config.get("mongoUri"));
        console.log(chalk.blueBright("DB connected"));
        app.listen(PORT, () => {
            console.log(
                chalk.green(`Server has been started on port ${PORT} ...`)
            );
        });
    } catch (err) {
        console.log(chalk.red(e.message));
        process.env(1);
    }
}

start();
