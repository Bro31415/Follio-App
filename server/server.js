const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        cardImg: "",
        user: "",
        username: "",
        heart: "",
        eye: ""
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});