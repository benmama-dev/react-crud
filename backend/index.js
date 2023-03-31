const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee",
});

app.post("/create", (req, res) => {
  const sql =
    "INSERT INTO employee (`firsname`, `lastname`,`email`,`age`) VALUES (?)";
  const values = [
    req.body.firsname,
    req.body.lastname,
    req.body.email,
    req.body.age,
  ];
  db.query(sql, [values], (err, result) => {
    if (err) return console.log(err);
    return res.json(result);
  });
});

app.put("/update/:id", (req, res) => {
  const sql =
    "update employee set `firsname` = ? , `lastname` = ? , `email` = ? , `age` = ?  where id = ?";
  const values = [
    req.body.firsname,
    req.body.lastname,
    req.body.email,
    req.body.age,
  ];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM employee WHERE id=?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/", (req, res) => {
  db.query("SELECT * FROM employee", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.delete('/delete/:id',(req,res)=>{
    const sql = "DELETE from employee WHERE id = ?";
    const id = req.params.id;

    db.query(sql, [id],(err,data)=>{
        if (err) return res.json("Error");
        return res.json(data);
    })
});

app.listen(8080, () => {
  console.log("Connect Port 8080");
});
