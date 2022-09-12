require('dotenv').config();

const port = process.env.PORT || 5000; 
const express = require('express');
const path = require('path');
const sequelize = require('./db');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require("./middleware/ErrorHadlingMiddleware");
const models = require('./models/models');

const app = express();
app.use(cors());
app.use(fileUpload({}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));

app.use('/api', router);
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(port, () => {
            console.log(`server started on port ${port}`);
        })
    }
    catch (e) {
        console.log(e);
    }
}

start();
