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
                        var ctime = stat2.ctime.readBigInt64BE();
                        var mtime = stat2.mtime.readBigInt64BE();
                        res.json({
                            children: children,
                            data: {
                                nodeData: data.toString('utf8'),
                                creationTime: new Date(Number(ctime)).toString(),
                                modificationTime: new Date(Number(mtime)).toString()
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