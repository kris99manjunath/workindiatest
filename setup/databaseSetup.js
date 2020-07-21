const { createConnection } = require('mysql');
require('dotenv').config();

dbSetup = () => {

    const con = createConnection({
        port: process.env.SQL_PORT,
        host: process.env.SQL_HOST,
        user: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
    });

    con.connect(async function (err) {
        if (err) {
            console.log(err.message);
            process.exit();
        }
        console.log("Connected!");
                 
        //create DB
        await con.query(`CREATE DATABASE ${process.env.DB_NAME}`, (err, result) => {
            if (err) {
                console.log(err.sqlMessage);
                process.exit();
            }
            else
                console.log(`Database created ${process.env.DB_NAME}`);
        });

        //use db
        await con.query(`USE ${process.env.DB_NAME}`, (err, result) => {
            if (err) {
                console.log(err.sqlMessage);
                process.exit();
            }
            else
                console.log(`using ${process.env.DB_NAME} Database`);
        });

        // create tables
        await con.query(`CREATE TABLE User(agent_id VARCHAR(30) PRIMARY KEY NOT NULL, password VARCHAR(100))`, (err, result) => {
            if (err) {
                console.log(err.sqlMessage);
                process.exit();
            }
            else
                console.log("User Table created");
        });

        await con.query(`CREATE TABLE Todo(todo_id INT PRIMARY KEY AUTO_INCREMENT ,agent_id VARCHAR(30) NOT NULL,title VARCHAR(30), description VARCHAR(100),category VARCHAR(30),due_date DATE,FOREIGN KEY (agent_id) REFERENCES User(agent_id))`, (err, result) => {
            if (err) {
                console.log(err.sqlMessage);
                process.exit();
            }
            else
                console.log("TODO Table created");
        });

        //close conn
        await con.end((err) => {
            if (err)
                console.log("Failed")
            else
                console.log("Database setup success")
        });
    })


}
  
module.exports = {dbSetup};