const mysql = require('mysql');

class Connexion{
    constructor() {
        this.connection = mysql.createConnection({
            host: 'your-ovh-db-host',
            user: 'your-db-user',
            password: 'your-db-password',
            database: 'your-db-name'
        });
    }

    connect() {
        this.connection.connect((err) => {
            if (err) {
                console.error('Error connecting to database: ' + err.stack);
                return;
            }
            console.log('Connected to database as id ' + this.connection.threadId);
        });
    }

    disconnect() {
        this.connection.end((err) => {
            if (err) {
                console.error('Error disconnecting from database: ' + err.stack);
                return;
            }
            console.log('Disconnected from database');
        });
    }

    query(sql, params, callback) {
        this.connection.query(sql, params, (err, results, fields) => {
            if (err) {
                console.error('Error executing query: ' + err.stack);
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    }
}

module.exports = OVHDatabase;
