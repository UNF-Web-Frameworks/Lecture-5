"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
// Rename a file
// Sync Version
fs_1.default.rename('files/rename.me', 'files/okay.me', (err) => {
    if (err)
        throw err;
    console.log('renamed complete');
});
// await pattern
async function example() {
    const fileName = 'files/fileData.txt';
    try {
        const data = await promises_1.default.readFile(fileName, 'utf8');
        console.log(data);
        const content = 'Some content!';
        await promises_1.default.writeFile(fileName, content);
        console.log('Wrote some content!');
        const newData = await promises_1.default.readFile(fileName, 'utf8');
        console.log(newData);
    }
    catch (err) {
        console.log(err);
    }
}
example();
// Path
console.log(path_1.default.basename('/test/something')); // something
path_1.default.basename('/test/something.txt'); // something.txt
path_1.default.basename('/test/something.txt', '.txt'); // something
path_1.default.dirname('/test/something'); // /test
path_1.default.join('/test', 'something'); // /test/something
console.log(os_1.default.cpus());
console.log(process.cwd());
// Node as a web server
const http_1 = __importDefault(require("http"));
const port = process.env.PORT || 3000;
const server = http_1.default.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
});
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
