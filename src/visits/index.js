const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
 host: 'redis-server', //usually a http address, but since it is defined in the docker-compose file we can just use the name
 port: 6379 //the default port for redis
});

client.set('visits', 0);

app.get('/', (req,res) => {
 process.exit(0);
 client.get('visits', (err, visits) => {
   res.send('Number of visits: ' + visits);
   client.set('visits', parseInt(visits) + 1);
 });
});

app.listen(8081, () => {
 console.log('Listening on port 8081');
});
