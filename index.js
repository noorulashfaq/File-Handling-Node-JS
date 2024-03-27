const fs = require('fs');

//********************************* */

// Synchronous file read
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);

// Asynchronous file read
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

//********************************* */

// Synchronous file write
fs.writeFileSync('example.txt', 'Hello, World!');
console.log('File written successfully!');

// Asynchronous file write
fs.writeFile('exampleWrite.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('File written successfully!');
});

//********************************* */

// Asynchronous file append
fs.appendFile('exampleWrite.txt', 'More data to append', (err) => {
    if (err) throw err;
    console.log('Data appended to file!');
});

//********************************* */

// Asynchronous file delete
fs.unlink('example.txt', (err) => {
    if (err) throw err;
    console.log('File deleted!');
});
