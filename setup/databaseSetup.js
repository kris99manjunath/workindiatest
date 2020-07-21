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
        await con.query(`CREATE TABLE USER(id int, name varchar(20))`, (err, result) => {
            if (err) {
                console.log(err.sqlMessage);
                process.exit();
            }
            else
                console.log("User Table created");
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