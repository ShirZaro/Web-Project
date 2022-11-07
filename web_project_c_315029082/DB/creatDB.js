var SQL = require('./db');
const path = require('path');
const csv=require('csvtojson');


const CreateTable_users = (req,res)=> {
    var Q_users = "CREATE TABLE if not exists users (ID int(9) NOT NULL PRIMARY KEY ,email VARCHAR(255), First_Name varchar(255),Last_Name varchar(255))";
    SQL.query(Q_users,(err,mySQLres)=>{
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "error in creating table Q_users"});
            return;
        }
        console.log('created table Q_users');
        res.send("table created Q_users");
        return;
    })      
}

const CreateTable_user_training = (req,res)=> {
    var Q_user_training = "CREATE TABLE if not exists User_training (ID int(9), year int(4) ,Month int(2), Week int(2) ,Squat_Count int(4),Squat_Weight int(4),Deadlift_Count int(4),Deadlift_Weight int(4),Pullaps_Count int(4),Pullaps_Weight int(4),Pushaps_Count int(4),Pushaps_Weight int(4), PRIMARY KEY(ID, year ,Month, Week))";
    SQL.query(Q_user_training,(err,mySQLres)=>{
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "error in creating table user_training "});
            return;
        }
        console.log('created table user_training ');
        res.send("table created user_training ");
        return;
    })      
}

const CreateTable_squat = (req,res)=> {
    var Q_squat = "CREATE TABLE if not exists squat (year int(4) ,Month int(2), Week int(2) ,Ex1_name varchar(225),Ex1_rep int(4),Ex1_coments varchar(225),Ex2_name varchar(225),Ex2_rep int(4),Ex2_coments varchar(225),Ex3_name varchar(225),Ex3_rep int(4),Ex3_coments varchar(225),Ex4_name varchar(225),Ex4_rep int(4),Ex4_coments varchar(225),Ex5_name varchar(225),Ex5_rep int(4),Ex5_coments varchar(225),Ex6_name varchar(225),Ex6_rep int(4),Ex6_coments varchar(225),Ex7_name varchar(225),Ex7_rep int(4),Ex7_coments varchar(225),Ex8_name varchar(225),Ex8_rep int(4),Ex8_coments varchar(225),Ex9_name varchar(225),Ex9_rep int(4),Ex9_coments varchar(225), PRIMARY KEY( year ,Month, Week))";
    SQL.query(Q_squat,(err,mySQLres)=>{
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "error in creating table Q_squat "});
            return;
        }
        console.log('created table Q_squat ');
        res.send("table created Q_squat ");
        return;
    })      
}

const CreateTable_deadlift = (req,res)=> {
    var Q_deadlift="CREATE TABLE if not exists deadlift (year int(4),Month int(2), Week int(2) ,Ex1_name varchar(225),Ex1_rep int(4),Ex1_coments varchar(225),Ex2_name varchar(225),Ex2_rep int(4),Ex2_coments varchar(225),Ex3_name varchar(225),Ex3_rep int(4),Ex3_coments varchar(225),Ex4_name varchar(225),Ex4_rep int(4),Ex4_coments varchar(225),Ex5_name varchar(225),Ex5_rep int(4),Ex5_coments varchar(225),Ex6_name varchar(225),Ex6_rep int(4),Ex6_coments varchar(225),Ex7_name varchar(225),Ex7_rep int(4),Ex7_coments varchar(225),Ex8_name varchar(225),Ex8_rep int(4),Ex8_coments varchar(225),Ex9_name varchar(225),Ex9_rep int(4),Ex9_coments varchar(225), PRIMARY KEY( year ,Month, Week))";
    SQL.query(Q_deadlift,(err,mySQLres)=>{
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "error in creating table Q_deadlift "});
            return;
        }
        console.log('created table Q_deadlift ');
        res.send("table created Q_deadlift ");
        return;
    })      
}


const CreateTable_Mobility = (req,res)=> {
    var Q_Mobility="CREATE TABLE if not exists Mobility (year int(4),Month int(2), Week int(2) ,Ex1_name varchar(225),Ex1_rep int(4),Ex1_coments varchar(225),Ex2_name varchar(225),Ex2_rep int(4),Ex2_coments varchar(225),Ex3_name varchar(225),Ex3_rep int(4),Ex3_coments varchar(225),Ex4_name varchar(225),Ex4_rep int(4),Ex4_coments varchar(225),Ex5_name varchar(225),Ex5_rep int(4),Ex5_coments varchar(225),Ex6_name varchar(225),Ex6_rep int(4),Ex6_coments varchar(225),Ex7_name varchar(225),Ex7_rep int(4),Ex7_coments varchar(225),Ex8_name varchar(225),Ex8_rep int(4),Ex8_coments varchar(225),Ex9_name varchar(225),Ex9_rep int(4),Ex9_coments varchar(225), PRIMARY KEY( year ,Month, Week))";
    SQL.query(Q_Mobility,(err,mySQLres)=>{
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "error in creating table Q_Mobility "});
            return;
        }
        console.log('created table Q_Mobility ');
        res.send("table created Q_Mobility ");
        return;
    })      
}

const CreateTable_Cardio = (req,res)=> {
    var Q_Cardio="CREATE TABLE if not exists Cardio (year int(4),Month int(2), Week int(2) ,Ex1_name varchar(225),Ex1_rep int(4),Ex1_coments varchar(225),Ex2_name varchar(225),Ex2_rep int(4),Ex2_coments varchar(225),Ex3_name varchar(225),Ex3_rep int(4),Ex3_coments varchar(225),Ex4_name varchar(225),Ex4_rep int(4),Ex4_coments varchar(225),Ex5_name varchar(225),Ex5_rep int(4),Ex5_coments varchar(225),Ex6_name varchar(225),Ex6_rep int(4),Ex6_coments varchar(225),Ex7_name varchar(225),Ex7_rep int(4),Ex7_coments varchar(225),Ex8_name varchar(225),Ex8_rep int(4),Ex8_coments varchar(225),Ex9_name varchar(225),Ex9_rep int(4),Ex9_coments varchar(225),PRIMARY KEY( year ,Month, Week))";
    SQL.query(Q_Cardio,(err,mySQLres)=>{
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "error in creating table Q_Cardio "});
            return;
        }
        console.log('created table Q_Cardio ');
        res.send("table created Q_Cardio ");
        return;
    })      
}



const InsertData_users = (req,res)=>{
    var Q2 = "INSERT INTO users SET ?";
    const csvFilePath= path.join(__dirname, "USERS.csv");
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
    console.log(jsonObj);
    jsonObj.forEach(element => {
        var NewEntry = {
            "ID": element.id,
            "Email": element.Email,
            "First_Name": element.First_Name,
            "Last_Name": element.Last_Name
        }
        SQL.query(Q2, NewEntry, (err,mysqlres)=>{
            if (err) {
                console.log("error in inserting data users", err);
            }
            console.log("created row sucssefuly ");
        });
    });
    })
    res.send("data read");
};

const InsertData_user_training = (req,res)=>{
    var currentYear = new Date().getFullYear();
    var Q2 = "INSERT INTO user_training SET ?";
    const csvFilePath= path.join(__dirname, "User_training.csv");
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
    console.log(jsonObj);
    jsonObj.forEach(element => {
        var NewEntry = {
            "ID": element.id,
            "year": currentYear,
            "Month": element.Month,
            "week": element.Week,
            "Squat_Count": element.Squat_Count,
            "Squat_Weight": element.Squat_Weight,
            "Deadlift_Count": element.Deadlift_Count,
            "Deadlift_Weight": element.Deadlift_Weight,
            "Pullaps_Count": element.Pullaps_Count,
            "Deadlift_Count": element.Deadlift_Count,
            "Pullaps_Count": element.Pullaps_Count,
            "Pullaps_Weight": element.Pullaps_Weight,
            "Pushaps_Count": element.Pushaps_Count,
            "Pushaps_Weight": element.Pushaps_Weight
        }
        SQL.query(Q2, NewEntry, (err,mysqlres)=>{
            if (err) {
                console.log("error in inserting data User_training", err);
            }
            console.log("created row sucssefuly ");
        });
    });
    })
    res.send("data read");
};














const InsertData_SQUAT = (req,res)=>{
    var currentYear = new Date().getFullYear();
    var Q2 = "INSERT INTO squat SET ?";
    const csvFilePath= path.join(__dirname, "SQUAT.csv");
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
    console.log(jsonObj);
    jsonObj.forEach(element => {
        var NewEntry = {
            "year": currentYear,
            "Month": element.Month,
            "week": element.Week,
            "Ex1_name": element.Ex1_name ,
            "Ex1_rep": element.Ex1_rep ,
            "Ex1_coments": element.Ex1_coments ,
            "Ex2_name": element.Ex2_name ,
            "Ex2_rep": element.Ex2_rep ,
            "Ex2_coments": element.Ex2_coments ,
            "Ex3_name": element.Ex3_name ,
            "Ex3_rep": element.Ex3_rep ,
            "Ex3_coments": element.Ex3_coments ,
            "Ex4_name": element.Ex4_name ,
            "Ex4_rep": element.Ex4_rep ,
            "Ex4_coments": element.Ex4_coments ,
            "Ex5_name": element.Ex5_name ,
            "Ex5_rep": element.Ex5_rep ,
            "Ex5_coments": element.Ex5_coments ,
            "Ex6_name": element.Ex6_name ,
            "Ex6_rep": element.Ex6_rep ,
            "Ex6_coments": element.Ex6_coments ,
            "Ex7_name": element.Ex7_name ,
            "Ex7_rep": element.Ex7_rep ,
            "Ex7_coments": element.Ex7_coments ,
            "Ex8_name": element.Ex8_name ,
            "Ex8_rep": element.Ex8_rep ,
            "Ex8_coments": element.Ex8_coments ,
            "Ex9_name": element.Ex9_name ,
            "Ex9_rep": element.Ex9_rep ,
            "Ex9_coments": element.Ex9_coments
        }
        SQL.query(Q2, NewEntry, (err,mysqlres)=>{
            if (err) {
                console.log("error in inserting data squat", err);
            }
            console.log("created row sucssefuly ");
        });
    });
    })
    res.send("data read");
};


const InsertData_Deadlift = (req,res)=>{
    var currentYear = new Date().getFullYear();
    var Q2 = "INSERT INTO Deadlift SET ?";
    const csvFilePath= path.join(__dirname, "DEADLIFT.csv");
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
    console.log(jsonObj);
    jsonObj.forEach(element => {
        var NewEntry = {
            "year": currentYear,
            "Month": element.Month,
            "week": element.Week,
            "Ex1_name": element.Ex1_name ,
            "Ex1_rep": element.Ex1_rep ,
            "Ex1_coments": element.Ex1_coments ,
            "Ex2_name": element.Ex2_name ,
            "Ex2_rep": element.Ex2_rep ,
            "Ex2_coments": element.Ex2_coments ,
            "Ex3_name": element.Ex3_name ,
            "Ex3_rep": element.Ex3_rep ,
            "Ex3_coments": element.Ex3_coments ,
            "Ex4_name": element.Ex4_name ,
            "Ex4_rep": element.Ex4_rep ,
            "Ex4_coments": element.Ex4_coments ,
            "Ex5_name": element.Ex5_name ,
            "Ex5_rep": element.Ex5_rep ,
            "Ex5_coments": element.Ex5_coments ,
            "Ex6_name": element.Ex6_name ,
            "Ex6_rep": element.Ex6_rep ,
            "Ex6_coments": element.Ex6_coments ,
            "Ex7_name": element.Ex7_name ,
            "Ex7_rep": element.Ex7_rep ,
            "Ex7_coments": element.Ex7_coments ,
            "Ex8_name": element.Ex8_name ,
            "Ex8_rep": element.Ex8_rep ,
            "Ex8_coments": element.Ex8_coments ,
            "Ex9_name": element.Ex9_name ,
            "Ex9_rep": element.Ex9_rep ,
            "Ex9_coments": element.Ex9_coments
        }
        SQL.query(Q2, NewEntry, (err,mysqlres)=>{
            if (err) {
                console.log("error in inserting data Deadlift", err);
            }
            console.log("created row sucssefuly ");
        });
    });
    })
    res.send("data read");
};


const InsertData_mobility= (req,res)=>{
    var currentYear = new Date().getFullYear();
    var Q2 = "INSERT INTO mobility SET ?";
    const csvFilePath= path.join(__dirname, "MOBILITY.csv");
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
    console.log(jsonObj);
    jsonObj.forEach(element => {
        var NewEntry = {
            "year": currentYear,
            "Month": element.Month,
            "week": element.Week,
            "Ex1_name": element.Ex1_name ,
            "Ex1_rep": element.Ex1_rep ,
            "Ex1_coments": element.Ex1_coments ,
            "Ex2_name": element.Ex2_name ,
            "Ex2_rep": element.Ex2_rep ,
            "Ex2_coments": element.Ex2_coments ,
            "Ex3_name": element.Ex3_name ,
            "Ex3_rep": element.Ex3_rep ,
            "Ex3_coments": element.Ex3_coments ,
            "Ex4_name": element.Ex4_name ,
            "Ex4_rep": element.Ex4_rep ,
            "Ex4_coments": element.Ex4_coments ,
            "Ex5_name": element.Ex5_name ,
            "Ex5_rep": element.Ex5_rep ,
            "Ex5_coments": element.Ex5_coments ,
            "Ex6_name": element.Ex6_name ,
            "Ex6_rep": element.Ex6_rep ,
            "Ex6_coments": element.Ex6_coments ,
            "Ex7_name": element.Ex7_name ,
            "Ex7_rep": element.Ex7_rep ,
            "Ex7_coments": element.Ex7_coments ,
            "Ex8_name": element.Ex8_name ,
            "Ex8_rep": element.Ex8_rep ,
            "Ex8_coments": element.Ex8_coments ,
            "Ex9_name": element.Ex9_name ,
            "Ex9_rep": element.Ex9_rep ,
            "Ex9_coments": element.Ex9_coments
        }
        SQL.query(Q2, NewEntry, (err,mysqlres)=>{
            if (err) {
                console.log("error in inserting data mobility", err);
            }
            console.log("created row sucssefuly ");
        });
    });
    })
    res.send("data read");
};


const InsertData_Cardio = (req,res)=>{
    var currentYear = new Date().getFullYear();
    var Q2 = "INSERT INTO cardio SET ?";
    const csvFilePath= path.join(__dirname, "CARDIO.csv");
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
    console.log(jsonObj);
    jsonObj.forEach(element => {
        var NewEntry = {
            "year": currentYear,
            "Month": element.Month,
            "week": element.Week,
            "Ex1_name": element.Ex1_name ,
            "Ex1_rep": element.Ex1_rep ,
            "Ex1_coments": element.Ex1_coments ,
            "Ex2_name": element.Ex2_name ,
            "Ex2_rep": element.Ex2_rep ,
            "Ex2_coments": element.Ex2_coments ,
            "Ex3_name": element.Ex3_name ,
            "Ex3_rep": element.Ex3_rep ,
            "Ex3_coments": element.Ex3_coments ,
            "Ex4_name": element.Ex4_name ,
            "Ex4_rep": element.Ex4_rep ,
            "Ex4_coments": element.Ex4_coments ,
            "Ex5_name": element.Ex5_name ,
            "Ex5_rep": element.Ex5_rep ,
            "Ex5_coments": element.Ex5_coments ,
            "Ex6_name": element.Ex6_name ,
            "Ex6_rep": element.Ex6_rep ,
            "Ex6_coments": element.Ex6_coments ,
            "Ex7_name": element.Ex7_name ,
            "Ex7_rep": element.Ex7_rep ,
            "Ex7_coments": element.Ex7_coments ,
            "Ex8_name": element.Ex8_name ,
            "Ex8_rep": element.Ex8_rep ,
            "Ex8_coments": element.Ex8_coments ,
            "Ex9_name": element.Ex9_name ,
            "Ex9_rep": element.Ex9_rep ,
            "Ex9_coments": element.Ex9_coments
        }
        SQL.query(Q2, NewEntry, (err,mysqlres)=>{
            if (err) {
                console.log("error in inserting data cardio", err);
            }
            console.log("created row sucssefuly ");
        });
    });
    })
    res.send("data read");
};

const ShowTable = (req,res)=>{
    var Q3 = "SELECT * FROM users";
    SQL.query(Q3, (err, mySQLres)=>{
        if (err) {
            console.log("error in showing table ", err);
            res.send("error in showing table ");
            return;
        }
        console.log("showing table");
        res.send(mySQLres);
        return;
    })};


module.exports = {CreateTable_users , CreateTable_user_training,CreateTable_squat,CreateTable_deadlift,
    CreateTable_Mobility,CreateTable_Cardio,InsertData_users,InsertData_user_training,
    InsertData_SQUAT,InsertData_Deadlift,InsertData_mobility,InsertData_Cardio,ShowTable};
