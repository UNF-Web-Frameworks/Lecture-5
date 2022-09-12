import fs from 'fs';
import fspromisse from 'fs/promises';
import path from 'path';
import os from 'os';
// Rename a file
// Sync Version
fs.rename('files/rename.me', 'files/okay.me', (err) => {
  if (err) throw err;
  console.log('renamed complete');
});

// await pattern
async function example() {
    const fileName = 'files/fileData.txt';
    try {
      const data = await fspromisse.readFile(fileName, 'utf8');
      console.log(data);
      const content = 'Some content!';
      await fspromisse.writeFile(fileName, content);
      console.log('Wrote some content!');
      const newData = await fspromisse.readFile(fileName, 'utf8');
      console.log(newData);
    } catch (err) {
      console.log(err);
    }
  }
  example();

  // Path
console.log(path.basename('/test/something')); // something
path.basename('/test/something.txt'); // something.txt
path.basename('/test/something.txt', '.txt'); // something


path.dirname('/test/something'); // /test
path.join('/test', 'something'); // /test/something



console.log(os.cpus());

console.log(process.cwd());


// Node as a web server
import http from 'http';
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
    });

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});