const sql = require('./db');
var path = require('path');

const createNewCustomer = (req, res)=>{
    if (!req.body) {
        res.status(400).send({message: "content cannot be empty"});
        return;
    }
    const NewCustomer = {
        "ID": req.body.ID,
        "Email": req.body.Email,
        "First_Name": req.body.First_Name,
        "Last_Name": req.body.Last_Name
    };
    console.log(NewCustomer);
    sql.query("INSERT INTO USERS SET ?", NewCustomer, (err, mysqlres)=>{
        if (err) {
            console.log("ERROR: ", err);
            res.status(400).send({message: "error in creating an account " + err});
            return;
        }
        console.log("New customer created");
        res.render("../views/home-page.pug");
        return;
    } )
}; 



const createNewSquatTraining = (req, res)=>{
    if (!req.body) {
        res.status(400).send({message: "content cannot be empty"});
        return;
    }
    console.log("ID INSIDE SQUAT",ID);
    var user = ID;
    var currentYear = new Date().getFullYear();
    if (user !='315'){
        const NewUserTrain = {
            "ID":user,
            "year": currentYear,
            "Month":req.body.Month,
            "Week":req.body.Week,
            "Squat_Count": req.body.Squat_ex1_count,
            "Squat_Weight": req.body.Squat_ex1_weigth,
            "Pullaps_Count": req.body.Squat_ex2_count,
            "Pullaps_Weight": req.body.Squat_ex2_weigth
        };
        let q = "SELECT * FROM User_Training where ID =? and year=? and month=? and week=?;"
        let data0 = [NewUserTrain.ID,NewUserTrain.year,NewUserTrain.Month,NewUserTrain.Week]
        sql.query(q,data0, (err, results, fields)=>{
            console.log("ressquattttt", results)
            if (err) {
                console.log("ERROR IS: " + err);
                res.status(400).send("Somthing is wrong with query" + err);
                return;
            }
            if(results.length>0){
                console.log("in the rigth place")
                let q1 = "UPDATE User_Training SET Squat_Count=?,Squat_Weight=?,Pullaps_Count=?,Pullaps_Weight=? WHERE ID=? and year=? and month=? and week=?;";
                console.log(q1)
                let d1 = [NewUserTrain.Squat_Count,NewUserTrain.Squat_Weight,NewUserTrain.Pullaps_Count,NewUserTrain.Pullaps_Weight,NewUserTrain.ID,NewUserTrain.year,NewUserTrain.Month,NewUserTrain.Week];
                console.log(d1)
                sql.query(q1,d1, (err, mysqlres)=>{
                    if (err) {
                        console.log("ERROR: ", err);
                        res.status(400).send({message: "error in creating an account " + err});
                        return;
                    };
                });
            }
            else{
                console.log("in the wrong place")
                let q2 = "INSERT INTO User_Training SET ?;";
                sql.query(q2,NewUserTrain, (err, mysqlres,fields)=>{
                    if (err) {
                        console.log("ERROR: ", err);
                        res.status(400).send({message: "error in creating an account " + err});
                        return;
                    };
                    console.log("SUCSSED! ");

                });
            }})}    
    else{
        var currentYear = new Date().getFullYear();
        const NewSquat = {
            "year": currentYear,
            "Month":req.body.Month,
            "Week":req.body.Week,
            "Ex1_name": req.body.Ex1_name,
            "Ex1_rep": req.body.Ex1_rep,
            "Ex1_coments": req.body.Ex1_coments,
            "Ex2_name": req.body.Ex2_name,
            "Ex2_rep": req.body.Ex2_rep,
            "Ex2_coments": req.body.Ex2_coments,
            "Ex3_name": req.body.Ex3_name,
            "Ex3_rep": req.body.Ex3_rep,
            "Ex3_coments": req.body.Ex3_coments,
            "Ex4_name": req.body.Ex4_name,
            "Ex4_rep": req.body.Ex4_rep,
            "Ex4_coments": req.body.Ex4_coments,
            "Ex5_name": req.body.Ex5_name,
            "Ex5_rep": req.body.Ex5_rep,
            "Ex5_coments": req.body.Ex5_coments,
            "Ex6_name": req.body.Ex6_name,
            "Ex6_rep": req.body.Ex6_rep,
            "Ex6_coments": req.body.Ex6_coments,
            "Ex7_name": req.body.Ex7_name,
            "Ex7_rep": req.body.Ex7_rep,
            "Ex7_coments": req.body.Ex7_coments,
            "Ex8_name": req.body.Ex8_name,
            "Ex8_rep": req.body.Ex8_rep,
            "Ex8_coments": req.body.Ex8_coments,
            "Ex9_name": req.body.Ex9_name,
            "Ex9_rep": req.body.Ex9_rep,
            "Ex9_coments": req.body.Ex9_coments,
        };
        console.log(NewSquat);
        sql.query("INSERT INTO Squat SET ?", NewSquat, (err, mysqlres)=>{
            if (err) {
                console.log("ERROR: ", err);
                res.status(400).send({message: "error in creating an account " + err});
                return;
            }
            console.log("New Squat created");
            // res.render("../views/home-page.pug");
            return;
        });
        }   
    }





const createNewCardioTraining = (req, res)=>{
    if (!req.body) {
        res.status(400).send({message: "content cannot be empty"});
        return;
    }
    var currentYear = new Date().getFullYear();
    const NewCardio = {
        "year": currentYear,
        "Month":req.body.Month,
        "Week":req.body.Week,
        "Ex1_name": req.body.Ex1_name,
        "Ex1_rep": req.body.Ex1_rep,
        "Ex1_coments": req.body.Ex1_coments,
        "Ex2_name": req.body.Ex2_name,
        "Ex2_rep": req.body.Ex2_rep,
        "Ex2_coments": req.body.Ex2_coments,
        "Ex3_name": req.body.Ex3_name,
        "Ex3_rep": req.body.Ex3_rep,
        "Ex3_coments": req.body.Ex3_coments,
        "Ex4_name": req.body.Ex4_name,
        "Ex4_rep": req.body.Ex4_rep,
        "Ex4_coments": req.body.Ex4_coments,
        "Ex5_name": req.body.Ex5_name,
        "Ex5_rep": req.body.Ex5_rep,
        "Ex5_coments": req.body.Ex5_coments,
        "Ex6_name": req.body.Ex6_name,
        "Ex6_rep": req.body.Ex6_rep,
        "Ex6_coments": req.body.Ex6_coments,
        "Ex7_name": req.body.Ex7_name,
        "Ex7_rep": req.body.Ex7_rep,
        "Ex7_coments": req.body.Ex7_coments,
        "Ex8_name": req.body.Ex8_name,
        "Ex8_rep": req.body.Ex8_rep,
        "Ex8_coments": req.body.Ex8_coments,
        "Ex9_name": req.body.Ex9_name,
        "Ex9_rep": req.body.Ex9_rep,
        "Ex9_coments": req.body.Ex9_coments,
    };
    console.log(NewSquat);
    sql.query("INSERT INTO Cardio SET ?", NewCardio, (err, mysqlres)=>{
        if (err) {
            console.log("ERROR: ", err);
            res.status(400).send({message: "error in creating an account " + err});
            return;
        }
        console.log("New Cardio created");
        // res.render("../views/home-page.pug");
        return;
    } )
}; 





const createNewDeadliftTraining = (req, res)=>{
    if (!req.body) {
        res.status(400).send({message: "content cannot be empty"});
        return;
    }
    var user = ID;
    var currentYear = new Date().getFullYear();
    if (user !='315'){
        const NewUserTrain = {
            "ID":user,
            "year": currentYear,
            "Month":req.body.Month,
            "Week":req.body.Week,
            "Deadlift_Count": req.body.Deadlift_ex1_count,
            "Deadlift_Weight": req.body.Deadlift_ex1_weigth,
            "Pushaps_Count": req.body.Deadlift_ex2_count,
             "Pushaps_Weight": req.body.Deadlift_ex2_weigth
        };
        let q = "SELECT * FROM User_Training where ID =? and year=? and month=? and week=?;"
        let data0 = [NewUserTrain.ID,NewUserTrain.year,NewUserTrain.Month,NewUserTrain.Week]
        sql.query(q,data0, (err, results, fields)=>{
            console.log("res11111", results)
            if (err) {
                console.log("ERROR IS: " + err);
                res.status(400).send("Somthing is wrong with query" + err);
                return;
            }
            if(results.length>0){
                let q1 = "UPDATE User_Training SET Squat_Count=?,Squat_Weight=?,Pullaps_Count=?,Pullaps_Weight=? WHERE ID=? and year=? and month=? and week=?;";
                let data = [NewUserTrain.Deadlift_Count, NewUserTrain.Deadlift_Weight,NewUserTrain.Pushaps_Count,NewUserTrain.Pushaps_Weight,NewUserTrain.year,NewUserTrain.Month,NewUserTrain.Week]
                sql.query(q1,data, (err, mysqlres)=>{
                if (err) {
                console.log("ERROR: ", err);
                res.status(400).send({message: "error in creating an account " + err});
                return;
                }
    });
    }
            else{
                let q2 = "INSERT INTO User_Training SET ?;";
                sql.query(q2,NewUserTrain, (err, mysqlres,fields)=>{
                    if (err) {
                        console.log("ERROR: ", err);
                        res.status(400).send({message: "error in creating an account " + err});
                        return;
                    };
                    console.log("SUCSSED! ");

                });
            }})}    



    else{
        var currentYear = new Date().getFullYear();
        const NewDeadlift = {
            "year": currentYear,
            "Month":req.body.Month,
            "Week":req.body.Week,
            "Ex1_name": req.body.Ex1_name,
            "Ex1_rep": req.body.Ex1_rep,
            "Ex1_coments": req.body.Ex1_coments,
            "Ex2_name": req.body.Ex2_name,
            "Ex2_rep": req.body.Ex2_rep,
            "Ex2_coments": req.body.Ex2_coments,
            "Ex3_name": req.body.Ex3_name,
            "Ex3_rep": req.body.Ex3_rep,
            "Ex3_coments": req.body.Ex3_coments,
            "Ex4_name": req.body.Ex4_name,
            "Ex4_rep": req.body.Ex4_rep,
            "Ex4_coments": req.body.Ex4_coments,
            "Ex5_name": req.body.Ex5_name,
            "Ex5_rep": req.body.Ex5_rep,
            "Ex5_coments": req.body.Ex5_coments,
            "Ex6_name": req.body.Ex6_name,
            "Ex6_rep": req.body.Ex6_rep,
            "Ex6_coments": req.body.Ex6_coments,
            "Ex7_name": req.body.Ex7_name,
            "Ex7_rep": req.body.Ex7_rep,
            "Ex7_coments": req.body.Ex7_coments,
            "Ex8_name": req.body.Ex8_name,
            "Ex8_rep": req.body.Ex8_rep,
            "Ex8_coments": req.body.Ex8_coments,
            "Ex9_name": req.body.Ex9_name,
            "Ex9_rep": req.body.Ex9_rep,
            "Ex9_coments": req.body.Ex9_coments,
        };
        
        console.log(NewDeadlift);
        sql.query("INSERT INTO Deadlift SET ?", NewDeadlift, (err, mysqlres)=>{
            if (err) {
                console.log("ERROR: ", err);
                res.status(400).send({message: "error in creating an account " + err});
                return;
            }
            console.log("New Deadlift created");
            // res.render("../views/home-page.pug");
            return;
    });
} }



const createNewMobilityTraining = (req, res)=>{
    if (!req.body) {
        res.status(400).send({message: "content cannot be empty"});
        return;
    }
    var currentYear = new Date().getFullYear();
    const NewMobility = {
        "year": currentYear,
        "Month":req.body.Month,
        "Week":req.body.Week,
        "Ex1_name": req.body.Ex1_name,
        "Ex1_rep": req.body.Ex1_rep,
        "Ex1_coments": req.body.Ex1_coments,
        "Ex2_name": req.body.Ex2_name,
        "Ex2_rep": req.body.Ex2_rep,
        "Ex2_coments": req.body.Ex2_coments,
        "Ex3_name": req.body.Ex3_name,
        "Ex3_rep": req.body.Ex3_rep,
        "Ex3_coments": req.body.Ex3_coments,
        "Ex4_name": req.body.Ex4_name,
        "Ex4_rep": req.body.Ex4_rep,
        "Ex4_coments": req.body.Ex4_coments,
        "Ex5_name": req.body.Ex5_name,
        "Ex5_rep": req.body.Ex5_rep,
        "Ex5_coments": req.body.Ex5_coments,
        "Ex6_name": req.body.Ex6_name,
        "Ex6_rep": req.body.Ex6_rep,
        "Ex6_coments": req.body.Ex6_coments,
        "Ex7_name": req.body.Ex7_name,
        "Ex7_rep": req.body.Ex7_rep,
        "Ex7_coments": req.body.Ex7_coments,
        "Ex8_name": req.body.Ex8_name,
        "Ex8_rep": req.body.Ex8_rep,
        "Ex8_coments": req.body.Ex8_coments,
        "Ex9_name": req.body.Ex9_name,
        "Ex9_rep": req.body.Ex9_rep,
        "Ex9_coments": req.body.Ex9_coments,
    };
    console.log(NewMobility);
    sql.query("INSERT INTO Mobility SET ?", NewMobility, (err, mysqlres)=>{
        if (err) {
            console.log("ERROR: ", err);
            res.status(400).send({message: "error in creating an account " + err});
            return;
        }
        console.log("New Mobility created");
        // res.render("../views/home-page.pug");
        return;
    } )
}; 


var ID=0;
var Squat_Weight_1;
var Deadlift_Weight_1;
var Squat_Weight_2;
var Deadlift_Weight_2;
var Squat_Weight_3;
var Deadlift_Weight_3;
var Squat_Weight_4;
var Deadlift_Weight_4;
var Customer = {
    id: 0
}



const FindCustomer = (req, res)=>{
    if (!req.body) {
        res.status(400).send({message: "serch cannot be empty"});
        return;        
    }
    ID = req.query.SearchID;
    Customer.id = ID;
    console.log(ID);
    sql.query("SELECT * FROM USERS where id like ?" , ID + "%", (err, results, fields)=>{
        console.log("finfifnfifn",results)
        if (err) {
            console.log("ERROR IS: " + err);
            res.status(400).send("Somthing is wrong with query" + err);
            return;
        }
        console.log("Customer found");
    });
    sql.query("SELECT * FROM User_Training where ID like ? " , ID + "%", (err, results, fields)=>{
        if (err) {
            console.log("ERROR IS: " + err);
            res.status(400).send("Somthing is wrong with query" + err);
            return;
        }
        //console.log("results",results)
        console.log("results",results[results.length])
        console.log("results",results[results.length-1])
        if (results.length > 0){
            Squat_Weight_1=results[results.length-1].Squat_Weight;
            Deadlift_Weight_1=results[results.length-1].Deadlift_Weight;
            if (results.length > 1){
                Squat_Weight_2=results[results.length-2].Squat_Weight;
                Deadlift_Weight_2=results[results.length-2].Deadlift_Weight;
            }
            if (results.length > 2){
            Squat_Weight_3=results[results.length-3].Squat_Weight;
            Deadlift_Weight_3=results[results.length-3].Deadlift_Weight;
            }
            if (results.length > 3){
            Squat_Weight_4=results[results.length-4].Squat_Weight;
            Deadlift_Weight_4=results[results.length-4].Deadlift_Weight;
            }
        };
});
res.render("../views/home-page.pug");
}

const GoSquat= (req, res)=>{
    if (!req.body) {
        res.status(400).send({message: "serch cannot be empty"});
        return;        
    }
    sql.query("SELECT * FROM squat order by month,week desc limit 1", (err, results, fields)=>{
        if (err) {
            console.log("ERROR IS: " + err);
            res.status(400).send("Somthing is wrong with query" + err);
            return;
        }
        res.render("../views/squat.pug", {
            var1: ID,
            Month: results[0].Month,
            Week:results[0].Week,
            Ex1_name: results[0].Ex1_name,
            Ex1_rep: results[0].Ex1_rep,
            Ex1_coments: results[0].Ex1_coments,
            Ex2_name: results[0].Ex2_name,
            Ex2_rep: results[0].Ex2_rep,
            Ex2_coments: results[0].Ex2_coments,
            Ex3_name: results[0].Ex3_name,
            Ex3_rep: results[0].Ex3_rep,
            Ex3_coments: results[0].Ex3_coments,
            Ex4_name: results[0].Ex4_name,
            Ex4_rep: results[0].Ex4_rep,
            Ex4_coments: results[0].Ex4_coments,
            Ex5_name: results[0].Ex5_name,
            Ex5_rep: results[0].Ex5_rep,
            Ex5_coments: results[0].Ex5_coments,
            Ex6_name: results[0].Ex6_name,
            Ex6_rep: results[0].Ex6_rep,
            Ex6_coments: results[0].Ex6_coments,
            Ex7_name: results[0].Ex7_name,
            Ex7_rep: results[0].Ex7_rep,
            Ex7_coments: results[0].Ex7_coments,
            Ex8_name: results[0].Ex8_name,
            Ex8_rep: results[0].Ex8_rep,
            Ex8_coments: results[0].Ex8_coments,
            Ex9_name: results[0].Ex9_name,
            Ex9_rep: results[0].Ex9_rep,
            Ex9_coments: results[0].Ex9_coments,
            Squat_Weight_1:Squat_Weight_1,
            Deadlift_Weight_1:Deadlift_Weight_1,
            Squat_Weight_2:Squat_Weight_2,
            Deadlift_Weight_2,
            Deadlift_Weight_2:Squat_Weight_3,
            Deadlift_Weight_3:Deadlift_Weight_3,
            Squat_Weight_4:Squat_Weight_4,
            Deadlift_Weight_4:Deadlift_Weight_4
        })
        return;
    });
}

const Gocardio= (req, res)=>{
    if (!req.body) {
        res.status(400).send({message: "serch cannot be empty"});
        return;        
    }
    sql.query("SELECT * FROM Cardio order by month,week desc limit 1", (err, results, fields)=>{
        if (err) {
            console.log("ERROR IS: " + err);
            res.status(400).send("Somthing is wrong with query" + err);
            return;
        }
        console.log("Customer found var1",ID);
        res.render("../views/Cardio.pug", {
            var1: ID,
            Month: results[0].Month,
            Week:results[0].Week,
            Ex1_name: results[0].Ex1_name,
            Ex1_rep: results[0].Ex1_rep,
            Ex1_coments: results[0].Ex1_coments,
            Ex2_name: results[0].Ex2_name,
            Ex2_rep: results[0].Ex2_rep,
            Ex2_coments: results[0].Ex2_coments,
            Ex3_name: results[0].Ex3_name,
            Ex3_rep: results[0].Ex3_rep,
            Ex3_coments: results[0].Ex3_coments,
            Ex4_name: results[0].Ex4_name,
            Ex4_rep: results[0].Ex4_rep,
            Ex4_coments: results[0].Ex4_coments,
            Ex5_name: results[0].Ex5_name,
            Ex5_rep: results[0].Ex5_rep,
            Ex5_coments: results[0].Ex5_coments,
            Ex6_name: results[0].Ex6_name,
            Ex6_rep: results[0].Ex6_rep,
            Ex6_coments: results[0].Ex6_coments,
            Ex7_name: results[0].Ex7_name,
            Ex7_rep: results[0].Ex7_rep,
            Ex7_coments: results[0].Ex7_coments,
            Ex8_name: results[0].Ex8_name,
            Ex8_rep: results[0].Ex8_rep,
            Ex8_coments: results[0].Ex8_coments,
            Ex9_name: results[0].Ex9_name,
            Ex9_rep: results[0].Ex9_rep,
            Ex9_coments: results[0].Ex9_coments,
            Squat_Weight_1:Squat_Weight_1,
            Deadlift_Weight_1:Deadlift_Weight_1,
            Squat_Weight_2:Squat_Weight_2,
            Deadlift_Weight_2,
            Deadlift_Weight_2:Squat_Weight_3,
            Deadlift_Weight_3:Deadlift_Weight_3,
            Squat_Weight_4:Squat_Weight_4,
            Deadlift_Weight_4:Deadlift_Weight_4
        })
        return;
    });
}
const GoDeadlift= (req, res)=>{
    if (!req.body) {
        res.status(400).send({message: "serch cannot be empty"});
        return;        
    }
    sql.query("SELECT * FROM Deadlift order by month,week desc limit 1", (err, results, fields)=>{
        if (err) {
            console.log("ERROR IS: " + err);
            res.status(400).send("Somthing is wrong with query" + err);
            return;
        }
        console.log("Customer found var1",ID);
        res.render("../views/Deadlift.pug", {
            var1: ID,
            Month: results[0].Month,
            Week:results[0].Week,
            Ex1_name: results[0].Ex1_name,
            Ex1_rep: results[0].Ex1_rep,
            Ex1_coments: results[0].Ex1_coments,
            Ex2_name: results[0].Ex2_name,
            Ex2_rep: results[0].Ex2_rep,
            Ex2_coments: results[0].Ex2_coments,
            Ex3_name: results[0].Ex3_name,
            Ex3_rep: results[0].Ex3_rep,
            Ex3_coments: results[0].Ex3_coments,
            Ex4_name: results[0].Ex4_name,
            Ex4_rep: results[0].Ex4_rep,
            Ex4_coments: results[0].Ex4_coments,
            Ex5_name: results[0].Ex5_name,
            Ex5_rep: results[0].Ex5_rep,
            Ex5_coments: results[0].Ex5_coments,
            Ex6_name: results[0].Ex6_name,
            Ex6_rep: results[0].Ex6_rep,
            Ex6_coments: results[0].Ex6_coments,
            Ex7_name: results[0].Ex7_name,
            Ex7_rep: results[0].Ex7_rep,
            Ex7_coments: results[0].Ex7_coments,
            Ex8_name: results[0].Ex8_name,
            Ex8_rep: results[0].Ex8_rep,
            Ex8_coments: results[0].Ex8_coments,
            Ex9_name: results[0].Ex9_name,
            Ex9_rep: results[0].Ex9_rep,
            Ex9_coments: results[0].Ex9_coments,
            Squat_Weight_1:Squat_Weight_1,
            Deadlift_Weight_1:Deadlift_Weight_1,
            Squat_Weight_2:Squat_Weight_2,
            Deadlift_Weight_2,
            Deadlift_Weight_2:Squat_Weight_3,
            Deadlift_Weight_3:Deadlift_Weight_3,
            Squat_Weight_4:Squat_Weight_4,
            Deadlift_Weight_4:Deadlift_Weight_4
        })
        return;
    });
}
const Gomobility= (req, res)=>{
    if (!req.body) {
        res.status(400).send({message: "serch cannot be empty"});
        return;        
    }
    sql.query("SELECT * FROM mobility order by month,week desc limit 1", (err, results, fields)=>{
        if (err) {
            console.log("ERROR IS: " + err);
            res.status(400).send("Somthing is wrong with query" + err);
            return;
        }
        console.log("Customer found var1",ID);
        res.render("../views/mobility.pug", {
            var1: ID,
            Month: results[0].Month,
            Week:results[0].Week,
            Ex1_name: results[0].Ex1_name,
            Ex1_rep: results[0].Ex1_rep,
            Ex1_coments: results[0].Ex1_coments,
            Ex2_name: results[0].Ex2_name,
            Ex2_rep: results[0].Ex2_rep,
            Ex2_coments: results[0].Ex2_coments,
            Ex3_name: results[0].Ex3_name,
            Ex3_rep: results[0].Ex3_rep,
            Ex3_coments: results[0].Ex3_coments,
            Ex4_name: results[0].Ex4_name,
            Ex4_rep: results[0].Ex4_rep,
            Ex4_coments: results[0].Ex4_coments,
            Ex5_name: results[0].Ex5_name,
            Ex5_rep: results[0].Ex5_rep,
            Ex5_coments: results[0].Ex5_coments,
            Ex6_name: results[0].Ex6_name,
            Ex6_rep: results[0].Ex6_rep,
            Ex6_coments: results[0].Ex6_coments,
            Ex7_name: results[0].Ex7_name,
            Ex7_rep: results[0].Ex7_rep,
            Ex7_coments: results[0].Ex7_coments,
            Ex8_name: results[0].Ex8_name,
            Ex8_rep: results[0].Ex8_rep,
            Ex8_coments: results[0].Ex8_coments,
            Ex9_name: results[0].Ex9_name,
            Ex9_rep: results[0].Ex9_rep,
            Ex9_coments: results[0].Ex9_coments,
            Squat_Weight_1:Squat_Weight_1,
            Deadlift_Weight_1:Deadlift_Weight_1,
            Squat_Weight_2:Squat_Weight_2,
            Deadlift_Weight_2,
            Deadlift_Weight_2:Squat_Weight_3,
            Deadlift_Weight_3:Deadlift_Weight_3,
            Squat_Weight_4:Squat_Weight_4,
            Deadlift_Weight_4:Deadlift_Weight_4
        })
        return;
    });
}




const GoMyProgress= (req, res)=>{
    if (!req.body) {
        res.status(400).send({message: "serch cannot be empty"});
        return;        
    }
    console.log(ID);
    res.render("../views/my_proggress.pug", {Squat_Weight_1,
            Deadlift_Weight_1,
            Squat_Weight_2,
            Deadlift_Weight_2,
            Squat_Weight_3,
            Deadlift_Weight_3,
            Squat_Weight_4,
            Deadlift_Weight_4
        });
};













module.exports = {GoMyProgress,createNewCustomer, FindCustomer, Update,GoSquat,Gocardio,GoDeadlift,Gomobility,createNewSquatTraining,createNewMobilityTraining,createNewDeadliftTraining,createNewCardioTraining};