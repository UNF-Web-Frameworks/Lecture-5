import fs from 'fs';
import fspromisse from 'fs/promises';
import path from 'path';
import os from 'os';
// Rename a file with call back pattern
fs.rename('files/rename.me', 'files/okay.me', (err) => {
  if (err) throw err;
  console.log('renamed complete');
});

// Read a file and write back to a file using the await async pattern
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
console.log(path.basename('/test/something.txt')); // something.txt
console.log((path.basename('/test/something.txt', '.txt'))); // something


path.dirname('/test/something'); // /test
path.join('/test', 'something'); // /test/something



console.log(os.cpus());

console.log(process.cwd());
