import fs from "fs";
console.log("🟢 Start of Program");

// Step 1: Read two files synchronously
const file1 = fs.readFileSync("file1.txt", "utf8");
const file2 = fs.readFileSync("file2.txt", "utf8");

// Step 2: Combine and write to result.txt
fs.writeFileSync("result.txt", file1 + "\n" + file2);

console.log("✅ File content combined and written!");
console.log("🔴 End of Program");
