// Import File System module
const fs = require("fs");

/***************************************************
 * 1. FILE WRITE
 ***************************************************/

// Asynchronous File Write
fs.writeFile("example_async.txt", "Hello, Asynchronous World!\n", (err) => {
  if (err) throw err;
  console.log("✅ Asynchronous file has been written");
});

// Synchronous File Write
try {
  fs.writeFileSync("example_sync.txt", "Hello, Synchronous World!\n");
  console.log("✅ Synchronous file has been written");
} catch (err) {
  console.error("❌ Error writing sync file:", err);
}

/***************************************************
 * 2. FILE READ
 ***************************************************/

// Async File Read (only if file exists)
if (fs.existsSync("example_async.txt")) {
  fs.readFile("example_async.txt", "utf-8", (err, data) => {
    if (err) console.error("❌ Error reading async file:", err);
    else console.log("📖 Asynchronous file content:\n", data);
  });
}

// Sync File Read
try {
  if (fs.existsSync("example_sync.txt")) {
    const data = fs.readFileSync("example_sync.txt", "utf-8");
    console.log("📖 Synchronous file content:\n", data);
  }
} catch (err) {
  console.error("❌ Error reading sync file:", err);
}

/***************************************************
 * 3. FILE APPEND
 ***************************************************/

// Async Append
fs.appendFile("example_async.txt", "Yash Sorathiya (Async Append)\n", (err) => {
  if (err) console.error("❌ Error appending async:", err);
  else console.log("✅ Data appended asynchronously");
});

// Sync Append
try {
  fs.appendFileSync("example_sync.txt", "Yash Sorathiya (Sync Append)\n");
  console.log("✅ Data appended synchronously");
} catch (err) {
  console.error("❌ Error appending sync:", err);
}

/***************************************************
 * 4. FILE RENAME
 ***************************************************/
if (fs.existsSync("example_sync.txt")) {
  fs.rename("example_sync.txt", "example_sync_renamed.txt", (err) => {
    if (err) console.error("❌ Error renaming file:", err);
    else console.log("✅ File renamed successfully");
  });
}

/***************************************************
 * 5. FILE DELETE
 ***************************************************/
if (fs.existsSync("delete_me.txt")) {
  fs.unlink("delete_me.txt", (err) => {
    if (err) console.error("❌ Error deleting file:", err.message);
    else console.log("✅ File deleted successfully");
  });
} else {
  console.log("⚠️ delete_me.txt not found, skipping delete");
}

/***************************************************
 * 6. DIRECTORY OPERATIONS
 ***************************************************/
// Create Directory
fs.mkdir("test_folder", { recursive: true }, (err) => {
  if (err) console.error("❌ Error creating folder:", err);
  else console.log("📁 Directory created successfully");
});

// Read Directory
fs.readdir("./", (err, files) => {
  if (err) console.error("❌ Error reading directory:", err);
  else console.log("📂 Files in current directory:", files);
});

// Remove Directory (modern way)
fs.rm("test_folder", { recursive: true, force: true }, (err) => {
  if (err) console.error("❌ Error removing folder:", err);
  else console.log("📁 Directory removed successfully");
});

/***************************************************
 * 7. FILE INFORMATION (Stats)
 ***************************************************/
if (fs.existsSync("example_async.txt")) {
  fs.stat("example_async.txt", (err, stats) => {
    if (err) console.error("❌ Error getting stats:", err);
    else {
      console.log("📊 File Stats:", stats);
      console.log("📏 Size:", stats.size, "bytes");
      console.log("📅 Created at:", stats.birthtime);
      console.log("🕒 Last modified:", stats.mtime);
    }
  });
}
