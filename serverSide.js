const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origin: '*',
    }
});
const cors = require('cors');

const allowCrossDomain = function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
}

app.use(allowCrossDomain);
app.use(cors());

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('new_data', (new_data) => {
        db.run('INSERT into todo_tasks(taskName,taskId,taskComplete)values("' + new_data.name + '",'+Math.floor(Math.random() * 90000000)+',0)',function(err,row){
            if(err){
                console.log(err.message)
            }
            console.log("Entry added")
        })

    });

    socket.on('old_data', (old_data) => {
        db.run('DELETE from todo_tasks where taskName = "'+old_data.name+'"', function (err, row) {
            if (err) {
                console.log(err.message)
            }
            console.log("Entry deleted")
        })

    });


    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

})

http.listen(8080);


const sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database('./todo.db', (err) => {
    if (err) {
        console.log(err.message)
    }
    console.log('Connected to todo database')
})
