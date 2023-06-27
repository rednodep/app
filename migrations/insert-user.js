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
        insert into users (username, password, email, birthday)
        values ('Joe', 'password', 'joe@johnbryce.co.il', '1975-07-18')
        `);

        console.log('Inserted user!');
    }
    catch (err) {
        console.log(err)
    }
})();