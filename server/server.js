const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(cors());

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    let serviceID = process.env.SERVICE_ID
    let publicID = process.env.PUBLIC_ID
    let publicKey = process.env.PUBLIC_KEY
    res.json({
        "serviceID": serviceID,
        "publicID": publicID,
        "publicKey": publicKey
    })
});

app.listen(PORT, () => console.log(`Server Running on: ${PORT}`))