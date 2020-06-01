const express = require('express');
var bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));

const port = 5000;  

app.post('/nodeData', async (req, res) => {

    var path = req.body.path;
    console.log(path);
    
	res.json({
        children: ['r','t','y'],
        data: {
            nodeData: 'blablabla',
            creationTime: '2012'
        }
    });

});

app.listen(port, () => console.log('server started on port ' + port));