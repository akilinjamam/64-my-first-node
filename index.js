const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Look Mama! I can code Node now!!!')
});

app.listen(port, () => {
    console.log('listen to port', port);
})
