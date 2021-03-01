const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('Hello Manoj , Congrats for New Career!'));
=======
app.get('/', (req, res) => res.send('Hello Manoj, Congrats for New Caareer!'));
>>>>>>> 7e3fb2958142bc7814d1dde077e1086f32546995

app.listen(port);
console.log(`App running on http://localhost:${port}`);
