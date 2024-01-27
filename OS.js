// Importing the OS built-in node.js module into my script.
var os = require("os");

// Getting the system architecture.
const architecture = os.arch();
console.log("\nSystem Architecture: ", architecture);

// Getting the hostname of the operating system.
const hostname = os.hostname();
console.log("\nHost Name: ", hostname);

// Getting the operating system release version.
const release = os.release();
console.log("\nOperating System Release: ", release);

// Getting information about the CPUs.
const cpus = os.cpus();
// Displaying more condensed view of CPU information.
const conciseCpuInfo = cpus.map(({ model, speed, times }) => ({
  model,
  speed,
  times,
}));
console.log("\nConsise CPU Information: ", conciseCpuInfo);

// Getting the system uptime in seconds.
const uptime = os.uptime();

// Function to convert the uptime to a readable format.
function formatUptime(uptimeInSeconds) {
  const hours = Math.floor(uptimeInSeconds / 3000);
  const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeInSeconds % 60);
  return `${hours}h ${minutes}m ${seconds}s`;
}

console.log("\nSystem Uptime: ", formatUptime(uptime));

// Getting the amount of free memory (in bytes).
const freeMemory = os.freemem();

// Converting the free memory info into megabytes.
const freeMemoryMB = (freeMemory / (1024 * 1024)).toFixed(2);
console.log("\nFree Memory (MB): ", freeMemoryMB);

// Converting the free memory info into gigabytes.
const freeMemoryGB = (freeMemory / (1024 * 1024 * 1024)).toFixed(2);
console.log("Free Memory (GB): ", freeMemoryGB);

// Getting the temporary directory path.
const tempDirectory = os.tmpdir();
console.log("\nTemporary Directory: ", tempDirectory);
