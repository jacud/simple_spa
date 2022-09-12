require('dotenv').config();

const port = process.env.PORT || 5000; 
const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
const router = require('./routes/index'); 

const app = express();
app.use(cors());
app.use('/api', router);
app.use(express.json());

const models = require('./models/models');

app.get('/', (req, resp) => {
    resp.status(200).json({ message: 'EveryThing is fine' });
});

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
