
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('hello');
    next();
})


app.get('/',(req, res) => {
    const user = {
        name:'sally',
        hobbie: 'soccer'
    }
    res.send(user);
});

app.listen(3000);