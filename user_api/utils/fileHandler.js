const fs = require('fs');

const readFile = (fileName) => {
console.log("PATH",path);
console.log("DIR", __dirname);
const  users  = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  );
console.log("UU", users);
return users;
};
module.exports = {readFile};