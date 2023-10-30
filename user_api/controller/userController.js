const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const getAllUser = (req, res) => {
        console.log("Get all users");
        const { users } = JSON.parse(
          fs.readFileSync("users.json", { encoding: "utf-8" })
        );
        res.status(200).json({ message: "success", users });
      };
    
     const getUserbyId = (req, res) => {
        console.log("Get an user by ID");
        const { users } = JSON.parse(
          fs.readFileSync("users.json", { encoding: "utf-8" })
        );
        const findUser = users.filter((user) => user.id === req.params.userId);
        if (findUser.length === 0) {
          res.status(400).json({ message: `${userId} тай хэрэглэгч олдсонгүй.` });
        } else {
          res.status(200).json({ message: "success", user: findUser[0] });
        }
    };
    
    const updateUserbyId = (req, res) => {
        console.log("Get an user by ID");
  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  );
  const findUser = users.filter((user) => user.id === req.params.userId);
  if (findUser.length === 0) {
    res.status(400).json({ message: `${userId} тай хэрэглэгч олдсонгүй.` });
  } else {
    res.status(200).json({ message: "success", user: findUser[0] });
  }
};
