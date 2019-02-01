var cors = require('cors')

const express = require('express')
const app = express()
const port = 3000

bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));


app.get('/', (req, res) => res.send('Hello Kepler!'))

data = require('./model/influxlog');
app.get('/log', data.sendToInflux);
app.post('/error', data.submitError);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
