const express = require('express');

const {PORT} = require('./config/serverCofig');


const setUPAndServerStart = () => {

    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.listen(PORT, () => console.log(`Server started on ${PORT}`))
}

setUPAndServerStart();

