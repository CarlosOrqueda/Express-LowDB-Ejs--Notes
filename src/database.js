import lowdb from 'lowdb';
import colors from 'colors';
import FileAsync from 'lowdb/adapters/FileAsync';

let db;

async function connect () {
    try {
        const adapter = new FileAsync('db.json');
        db = await lowdb(adapter);
        await db.defaults({entries: []}).write();
    } catch (e) {
        console.log(colors.bgRed(e));
    }
}

const getConnection = () => db;

module.exports = {
    connect,
    getConnection
}