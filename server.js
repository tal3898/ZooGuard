const express = require('express');

const app = express();

const port = 5000;

app.post('/nodeData', async (req, res) => {

	res.json({
        children: ['r','t','y'],
        data: {}
    });

});

app.listen(port, () => console.log('server started on port ' + port));