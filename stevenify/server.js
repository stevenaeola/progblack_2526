const express = require('express')
const app = express()

const fs = require('fs');

let songs = require("./songs.json")


app.use(express.static('client'));
app.use(express.json());


app.get('/song/list', function (req, resp){
    resp.send(songs);
});

app.post('/song/new', function(req, resp){
  console.log("Post add new");
  console.log("body is");
  console.log(req.body);
  songs.push(req.body.songtitle);
  fs.writeFileSync('./songs.json', JSON.stringify(songs));
  resp.send("Thank you for you interest in stevenify. Your request has not been put into a queue")
})

app.listen(8090)
