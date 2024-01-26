var os = require("os");

// Getting the system architecture
const architecture = os.arch();

const userInfo = os.type();

const release = os.release();

const hostName = os.hostname();

const networkInterfaces = os.networkInterfaces();

const cpus = os.cpus();

const uptime = os.uptime();

const freeMemory = os.freemem();

const tempDirectory = os.tmpdir();

console.log(architecture);
console.log(userInfo);
console.log(release);
console.log(hostName);
// console.log(networkInterfaces);
// console.log(cpus);
console.log(uptime);
console.log(freeMemory);
console.log(tempDirectory);
