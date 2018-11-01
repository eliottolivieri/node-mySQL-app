const express = require("express");
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : 'ENTER PASSWORD',
    //database : 'myfastestlaps',
    insecureAuth : true

    
});

//connect 

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('mysql connected!!');
});

const app = express();

app.listen('3000', () => {
    console.log("Server started on port 5000");
});

