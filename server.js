const express = require('express');

const app = express();

const port = 5000;

app.post('/children', async (req, res) => {

	res.json({message: "good"});

});

app.listen(port, () => console.log('server started on port ' + port));