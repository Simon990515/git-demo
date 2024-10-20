const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

const runServer = async () => {
    app.get('/health', (req, res) => {
        res.json({msg: 'Server started.'});
    });

    app.get('/test', (req, res) => {
        res.json({msg: 'Hello World!'});
    });

    app.get('/demo', (req, res) => {
        res.json({msg: 'Demo works'});
    });

    await app.listen(PORT);
    console.log(`Server running on port ${PORT}`);
}

runServer();