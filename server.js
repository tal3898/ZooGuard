const express = require('express');
var bodyParser = require('body-parser')
var zookeeper = require('node-zookeeper-client');
//const zookeeperSync = require('node-zookeeper-client-async');

var zClient = zookeeper.createClient('localhost:2181');
zClient.connect();


const app = express();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));

const port = 5000;  

app.post('/nodeData', async (req, res) => {

    try {
        var path = req.body.path;
        console.log('requested path ' + path);
    
        zClient.getChildren(path, function(error, children, stat) {
            if (!error) {
                zClient.getData(path, function(error2, data, stat2) {

                    if (!error2) {
                        res.json({
                            children: children,
                            data: {
                                nodeData: data.toString('utf8'),
                                creationTime: '2012'
                            }
                        });
                    }
                })
                
            }
        })
    

    } catch(e) {
        console.log('ee ' + e);
    }
    

});

app.listen(port, () => console.log('server started on port ' + port));