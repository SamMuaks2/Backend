const fs = require("fs");

// fs.writeFile("mohri.txt", "Hello dear from Sam Muak's", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved");
// });

fs.readFile("./mohri.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
