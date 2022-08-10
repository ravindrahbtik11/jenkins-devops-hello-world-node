// const logger = require('./logger');
// logger.log('message');

// const path = require('path');

// console.log(path.parse(__filename));
// const os = require('os');
// const free = os.freemem();
// const totalMem = os.totalmem();
// // console.log('Total Memmor ' + totalMem);

// console.log(`Total Memmory: ${totalMem}` );
// console.log(`Free Memmory: ${free}` );

// const fs = require('fs');

// // const file = fs.readdirSync('./');
// // console.log(file);

// fs.readdir('./', function(err, file){
//     if(err) console.log('Error ', err)
//     else console.log('Result ', file)
// })

// const EventEmitter = require('events');
// const emitter =new EventEmitter();

// // Register a listener
// emitter.on('MessageLogged', function(arg){
//     console.log('Listener is called ', arg);
// });

// // Register a listener
// emitter.on('MessageLogged', (arg) =>{
//     console.log('Listener is called ', arg);
// });


// // Raise an events
// emitter.emit('MessageLogged', {id: 1, url:'http:/'}) // Making a noise or signling or raise a events.


const person = require('./person.js');
var person1 = new person('James', 'Bond');
console.log(`Full Name: ${person1.fullName()}`);