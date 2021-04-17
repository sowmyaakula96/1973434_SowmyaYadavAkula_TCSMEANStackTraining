const fs = require('fs');
const mongoose = require('mongoose');
const JSONStream = require('JSONStream');
const User = require('./user.js');

const startTime = Date.now();

const databaseURL = 'mongodb://127.0.0.1/callData1';
mongoose.connect(databaseURL);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

console.log('User', User)
db.on('open', () => {
  console.log('Connected to mongo server.\nImport from file to DB started...');
  const dataStreamFromFile = fs.createReadStream(`${__dirname}/call_data.json`);

  dataStreamFromFile.pipe(JSONStream.parse('*')).on('data', (chunk) => {
    //   console.log(chunk)
    new User(chunk).save();
  });

  dataStreamFromFile.on('end', () => {
    const timeTaken = Date.now() - startTime;
    console.log(`Import completed in ${timeTaken} milisecs, closing connection...`);
    db.close();
    process.exit(0);
  });
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  process.exit(-1);
});
