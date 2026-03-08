const db = require("../config/db");


const sendMessage = (req, res) => {
  const { name, email, message } = req.body;

  const sql =
    "INSERT INTO contact_messages (name,email,message) VALUES (?,?,?)";

  db.query(sql, [name, email, message], (err, result) => { 
    if (err) {
      console.log(err);
      res.status(500).send("Database error");
    } else {
      res.send("Message saved successfully");
    }
  });
};

module.exports = { sendMessage };
