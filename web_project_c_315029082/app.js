//import modules
const express = require('express');
const BodyParser = require('body-parser');
const port = 8080;
const sql = require('../web_project_c_315029082/DB/db');
const connection = require('../web_project_c_315029082/DB/db');
const path = require('path');
const CRUD = require("../web_project_c_315029082/DB/CRUD_functions.js"); 
const CreateDB = require('../web_project_c_315029082/DB/creatDB.js');
const fs = require('fs');
const stringify = require('csv-stringify').stringify;
const { parse } = require("csv-parse");
const CSVToJSON = require('csvtojson');
const app = express();
app.use(express.static('static'));


app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));


// load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('public'))
app.use(express.static('DB'))

// home route

app.get('/', (req,res)=>{
res.render('sign_in');
    //res.send('Hello PUG');
});
app.get('/sign_up', (req,res)=>{
    res.render('sign_up');
    })

app.get('/home-page', (req,res)=>{
    res.render('home-page');
    })
app.get('/cardio', CRUD.Gocardio)
app.get('/Deadlift', CRUD.GoDeadlift)
app.get('/mobility',CRUD.Gomobility)

    
app.get('/squat', CRUD.GoSquat)


app.get('/my_proggress',CRUD.GoMyProgress)

app.post("/createNewCustomer", CRUD.createNewCustomer);
app.post("/createNewSquatTraining", CRUD.createNewSquatTraining);
app.post("/createNewMobilityTraining", CRUD.createNewMobilityTraining);
app.post("/createNewDeadliftTraining", CRUD.createNewDeadliftTraining);
app.post("/createNewCardioTraining", CRUD.createNewCardioTraining);

app.get('/find', CRUD.FindCustomer);

app.get('/CreateTable_users',CreateDB.CreateTable_users);
app.get('/CreateTable_user_training',CreateDB.CreateTable_user_training);
app.get('/CreateTable_squat',CreateDB.CreateTable_squat);
app.get('/CreateTable_deadlift',CreateDB.CreateTable_deadlift);
app.get('/CreateTable_Mobility',CreateDB.CreateTable_Mobility);
app.get('/CreateTable_Cardio',CreateDB.CreateTable_Cardio);
app.get("/InsertData_users", CreateDB.InsertData_users);
app.get("/InsertData_user_training", CreateDB.InsertData_user_training);
app.get("/InsertData_SQUAT", CreateDB.InsertData_SQUAT);
app.get("/InsertData_Deadlift", CreateDB.InsertData_Deadlift);
app.get("/InsertData_mobility", CreateDB.InsertData_mobility);
app.get("/InsertData_Cardio", CreateDB.InsertData_Cardio);




// fs.createReadStream("./db/USERS.csv")
//   .pipe(parse({ delimiter: ",", from_line: 2 }))
//   .on("data", function (row) {
//     console.log(row);
//   })

// fs.createReadStream("./db/User_training.csv")
//   .pipe(parse({ delimiter: ",", from_line: 2 }))
//   .on("data", function (row) {
//     console.log(row);
//   })

//   fs.createReadStream("./db/DEADLIFT.csv")
//   .pipe(parse({ delimiter: ",", from_line: 2 }))
//   .on("data", function (row) {
//     // console.log(row);
//   })

//   fs.createReadStream("./db/MOBILITY.csv")
//   .pipe(parse({ delimiter: ",", from_line: 2 }))
//   .on("data", function (row) {
//     // console.log(row);
//   })

//   fs.createReadStream("./db/SQUAT.csv")
//   .pipe(parse({ delimiter: ",", from_line: 2 }))
//   .on("data", function (row) {
//     // console.log(row);
//   })

//   fs.createReadStream("./db/CARDIO.csv")
//   .pipe(parse({ delimiter: ",", from_line: 2 }))
//   .on("data", function (row) {
//     // console.log(row);
//   })



// set server to listen at port
app.listen(3000, ()=>{
console.log('Server is renning at port 3000 ...')
});