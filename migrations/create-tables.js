const mysql = require('mysql2');
const util = require('util');
const config = require('config');

const connection = mysql.createConnection({
    host: config.get('mysql.host'),
    user: config.get('mysql.user'),
    port: config.get('mysql.port'),
    password: config.get('mysql.password'),
    database: config.get('mysql.database')
});

connection.connect = util.promisify(connection.connect);
connection.query = util.promisify(connection.query);

(async () => {
    try {
        await connection.connect();
        console.log('Connected!');

        await connection.query(`
        CREATE TABLE IF NOT EXISTS users (
            id int auto_increment not null,
            github_id varchar(255) not null,
            primary key (id)
          )  
     
        `);

        await connection.query(`
        CREATE TABLE IF NOT EXISTS users_symbols (
            id int auto_increment not null,
            user_id int not null,
            symbol varchar(3) not null,
            primary key (id)
          )  
     
        `);
        console.log('Created tables!');
    }
    catch (err) {
        console.log(err)
    }
})();