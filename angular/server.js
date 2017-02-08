const express = require('express');


/*const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
    console.log('Ma première application Angular.js.\nhttp://localhost:3000');
});*/


express().use(express.static(__dirname + '/public')).listen(3000, () => {
    console.log('http://localhost:3000');
});