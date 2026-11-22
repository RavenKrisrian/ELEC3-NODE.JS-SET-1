// Name: Raven Kristian Abarintos
// Section: IV-BSIT C
// Activity: N3
// Date: 2026-11-15

const fs = require("fs");
const path = require("path");
const filesDirectory = path.join(__dirname, "files");

if (!fs.existsSync(filesDirectory)) fs.mkdirSync(filesDirectory, { recursive: true });

function getFilePath(fileName) {
  const safeName = path.basename(fileName);
  if (!safeName || safeName !== fileName || safeName === "." || safeName === "..") {
    throw new Error("Use a file name only, without folder paths.");
  }
  return path.join(filesDirectory, safeName);
}

function createFile(fileName, content) {
  const filePath = getFilePath(fileName);
  if (fs.existsSync(filePath)) throw new Error("File already exists.");
  fs.writeFileSync(filePath, content, "utf8");
  console.log("Created:", filePath);
}
function readFile(fileName) {
  const filePath = getFilePath(fileName);
  console.log(fs.readFileSync(filePath, "utf8"));
}
function updateFile(fileName, content) {
  const filePath = getFilePath(fileName);
  fs.appendFileSync(filePath, content, "utf8");
  console.log("Updated:", filePath);
}
function deleteFile(fileName) {
  const filePath = getFilePath(fileName);
  fs.unlinkSync(filePath);
  console.log("Deleted:", filePath);
}
function listFiles() {
  const names = fs.readdirSync(filesDirectory);
  if (names.length === 0) {
    console.log("The files folder is empty.");
    return;
  }
  for (const name of names) {
    const fullPath = path.join(filesDirectory, name);
    if (!fs.statSync(fullPath).isFile()) continue;
    console.log("\nFull path:", fullPath);
    console.log("File name:", path.basename(fullPath));
    console.log("Extension:", path.extname(fullPath));
    console.log("Contents:", fs.readFileSync(fullPath, "utf8"));
  }
}

const [command, fileName, ...contentParts] = process.argv.slice(2);
const content = contentParts.join(" ");
try {
  if (command === "create") createFile(fileName, content);
  else if (command === "read") readFile(fileName);
  else if (command === "update") updateFile(fileName, content);
  else if (command === "delete") deleteFile(fileName);
  else if (command === "list") listFiles();
  else console.log('Usage: node index.js <create|read|update|delete|list> [fileName] ["content"]');
} catch (error) {
  if (error.code === "ENOENT") console.log("Error: file does not exist.");
  else console.log("Error:", error.message);
  process.exitCode = 1;
}
